import type { Metadata } from "next";
import ICDesignProcessPage from "@/views/resources/courses/ic-design-process/page";
export const metadata: Metadata = { title: "IC Design Process", description: "A guide to the integrated circuit design process." };
export default function Page() { return <ICDesignProcessPage />; }
