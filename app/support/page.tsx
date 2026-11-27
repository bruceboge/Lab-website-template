import type { Metadata } from "next";
import SupportPage from "@/views/support/page";
export const metadata: Metadata = { title: "Support", description: "Partner with and support DeICE." };
export default function Page() { return <SupportPage />; }
