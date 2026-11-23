import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailPage from "@/views/resources/courses/[slug]/page";

const courseNames: Record<string, string> = {
  "digital-vlsi-design": "Digital VLSI Design",
  "analog-vlsi-design": "Analog VLSI Design",
  "signals-and-ic-design": "Signals & IC Design",
  "mixed-signal-design": "Mixed-Signal Design",
  "embedded-systems-fpga": "Embedded Systems & FPGA",
};
export function generateStaticParams() { return Object.keys(courseNames).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: courseNames[slug] ?? "Course Not Found" };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = await params;
  if (!courseNames[resolved.slug]) notFound();
  return <CourseDetailPage params={resolved} />;
}
