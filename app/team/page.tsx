import type { Metadata } from "next";
import TeamPage from "@/views/team/page";

export const metadata: Metadata = { title: "Team", description: "Meet the DICEL laboratory team." };
export default function Page() { return <TeamPage />; }
