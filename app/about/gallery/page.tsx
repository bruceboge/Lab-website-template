import type { Metadata } from "next";
import GalleryPage from "@/views/about/gallery/page";

export const metadata: Metadata = { title: "Gallery", description: "Photos and visual highlights from DeICE." };
export default function Page() { return <GalleryPage />; }
