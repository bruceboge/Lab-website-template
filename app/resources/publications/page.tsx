import type { Metadata } from "next";
import PublicationsPage from "@/views/resources/publications/page";
export const metadata: Metadata = { title: "Publications", description: "DICEL research publications and reports." };
export default function Page() { return <PublicationsPage />; }
