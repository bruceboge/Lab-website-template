import type { Metadata } from "next";
import ContactPage from "@/views/contact/page";
export const metadata: Metadata = { title: "Contact", description: "Contact DICEL about research, learning, and collaboration." };
export default function Page() { return <ContactPage />; }
