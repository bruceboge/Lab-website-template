import type { Metadata } from "next";
import InventoryPage from "@/views/resources/inventory/page";
export const metadata: Metadata = { title: "Inventory & Facilities", description: "Equipment and laboratory facilities at DICEL." };
export default function Page() { return <InventoryPage />; }
