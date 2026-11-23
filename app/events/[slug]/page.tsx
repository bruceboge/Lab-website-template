import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetailPage from "@/views/events/[slug]/page";
import { EVENTS_DATA } from "@/data/events";

export function generateStaticParams() { return EVENTS_DATA.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS_DATA.find((item) => item.slug === slug);
  return event ? { title: event.title, description: event.summary } : { title: "Event Not Found" };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = await params;
  if (!EVENTS_DATA.some((item) => item.slug === resolved.slug)) notFound();
  return <EventDetailPage params={resolved} />;
}
