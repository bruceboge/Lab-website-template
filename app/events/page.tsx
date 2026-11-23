import type { Metadata } from "next";
import EventsPage from "@/views/events/page";

export const metadata: Metadata = { title: "Events", description: "Events, workshops, and activities at DICEL." };
export default function Page() { return <EventsPage />; }
