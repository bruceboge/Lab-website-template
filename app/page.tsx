import type { Metadata } from "next";
import Home from "@/views/page";

export const metadata: Metadata = {
  title: "DeICE · Integrated Circuit Engineering",
  description: "DeICE is the DeKUT Integrated Circuit Engineering laboratory at Dedan Kimathi University of Technology in Nyeri, Kenya.",
};

export default function Page() {
  return <Home />;
}
