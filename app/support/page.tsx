import type { Metadata } from "next";
import SupportPage from "@/views/support/page";
export const metadata: Metadata = { title: "Support", description: "Partner with and support DICEL." };
export default function Page() { return <SupportPage />; }
