import Link from "next/link";
import LabBrand from "@/components/LabBrand";
import MobileNavigation from "@/components/MobileNavigation";
import PrimaryNavigation from "@/components/PrimaryNavigation";
import SiteSearch from "@/components/SiteSearch";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar" role="banner">
        <span className="utility-institution">
          Dedan Kimathi University of Technology · Nyeri, Kenya
        </span>
        <Link href="https://www.dkut.ac.ke/admissions" target="_blank" rel="noreferrer">
          Apply to DeKUT →
        </Link>
      </div>
      <div className="nav-wrap">
        <LabBrand />
        <PrimaryNavigation />
        <SiteSearch />
        <MobileNavigation />
      </div>
    </header>
  );
}
