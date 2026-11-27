import type { Metadata } from "next";
import ContactPage from "@/views/contact/page";
export const metadata: Metadata = { title: "Contact", description: "Contact DeICE about research, learning, and collaboration." };
export default function Page() { return <ContactPage />; }
