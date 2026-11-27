import type { Metadata } from "next";
import EventsPage from "@/views/events/page";

export const metadata: Metadata = { title: "Events", description: "Events, workshops, and activities at DeICE." };
export default function Page() { return <EventsPage />; }
