import type { Metadata } from "next";
import ResourcesPage from "@/views/resources/page";
export const metadata: Metadata = { title: "Resources", description: "Publications, courses, inventory, and facilities." };
export default function Page() { return <ResourcesPage />; }
