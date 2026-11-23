import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/views/projects/[slug]/page";
import { PROJECTS_DATA } from "@/data/projects";

export function generateStaticParams() { return PROJECTS_DATA.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : { title: "Project Not Found" };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = await params;
  if (!PROJECTS_DATA.some((item) => item.slug === resolved.slug)) notFound();
  return <ProjectDetailPage params={resolved} />;
}
