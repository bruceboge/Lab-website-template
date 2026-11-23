import type { Metadata } from "next";
import Home from "@/views/page";

export const metadata: Metadata = {
  title: "DICEL · Integrated Circuit Engineering",
  description: "DICEL is the integrated circuit engineering lab at Dedan Kimathi University of Technology in Nyeri, Kenya.",
};

export default function Page() {
  return <Home />;
}
