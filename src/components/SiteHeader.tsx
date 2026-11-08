import Link from "next/link";
import LabBrand from "@/components/LabBrand";
import MobileNavigation from "@/components/MobileNavigation";
import PrimaryNavigation from "@/components/PrimaryNavigation";
import SiteSearch from "@/components/SiteSearch";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        
        <span className="utility-institution">
          Dedan Kimathi University of Technology · Nyeri, Kenya
        </span>
        <Link href="/contact" aria-label="Connect with the lab">
          Connect with the lab <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="nav-wrap">
        <LabBrand />
        <PrimaryNavigation />
        <SiteSearch />
        <ThemeToggle />
        <MobileNavigation />
      </div>
    </header>
  );
}
