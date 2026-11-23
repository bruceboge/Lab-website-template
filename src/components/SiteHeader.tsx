import Link from "@/components/next-link";
import LabBrand from "@/components/LabBrand";
import MobileNavigation from "@/components/MobileNavigation";
import PrimaryNavigation from "@/components/PrimaryNavigation";
import SiteSearch from "@/components/SiteSearch";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <LabBrand />
        <PrimaryNavigation />
        <SiteSearch />
        <MobileNavigation />
      </div>
    </header>
  );
}
