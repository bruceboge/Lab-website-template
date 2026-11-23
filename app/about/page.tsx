import type { Metadata } from "next";
import AboutPage from "@/views/about/page";

export const metadata: Metadata = { title: "About the Lab", description: "About DICEL at Dedan Kimathi University of Technology." };
export default function Page() { return <AboutPage />; }
