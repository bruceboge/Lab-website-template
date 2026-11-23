import type { Metadata } from "next";
import ProjectsPage from "@/views/projects/page";

export const metadata: Metadata = { title: "Projects", description: "Integrated circuit research and engineering projects." };
export default function Page() { return <ProjectsPage />; }
