import type { Metadata } from "next";
import CoursesPage from "@/views/resources/courses/page";
export const metadata: Metadata = { title: "Courses", description: "Integrated circuit engineering courses at DICEL." };
export default function Page() { return <CoursesPage />; }
