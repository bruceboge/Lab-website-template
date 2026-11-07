import Link from "next/link";
import LabBrand from "@/components/LabBrand";
import MobileNavigation from "@/components/MobileNavigation";
import PrimaryNavigation from "@/components/PrimaryNavigation";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>Research · Design · Education</span>
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
        <MobileNavigation />
      </div>
    </header>
  );
}
