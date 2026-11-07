import Link from "next/link";
import NavigationDropdown from "@/components/NavigationDropdown";

const resourceLinks = [
  { label: "All resources", href: "/resources" },
  { label: "Publications", href: "/resources/publications" },
  { label: "Courses", href: "/resources/courses" },
  { label: "Inventory", href: "/resources/inventory" },
  { label: "Tools & facilities", href: "/resources/tools" },
];

const aboutLinks = [
  { label: "About the lab", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/about/gallery" },
];

const linksAfterResources = [
  { label: "Projects", href: "/projects" },
  { label: "Support Us", href: "/support" },
];

export default function PrimaryNavigation({
  mobile = false,
  id,
  hidden,
}: {
  mobile?: boolean;
  id?: string;
  hidden?: boolean;
}) {
  return (
    <nav
      aria-label="Main navigation"
      className={mobile ? "mobile-nav-links" : "desktop-nav"}
      id={id}
      hidden={hidden}
    >
      <Link href="/">Home</Link>
      <NavigationDropdown
        label="About"
        links={aboutLinks}
        id={mobile ? "about-menu-mobile" : "about-menu-desktop"}
        className="nav-dropdown--about"
      />
      <NavigationDropdown
        label="Resources"
        links={resourceLinks}
        id={mobile ? "resources-menu-mobile" : "resources-menu-desktop"}
        className="nav-dropdown--resources"
      />
      {linksAfterResources.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
      <Link
        className={mobile ? "button mobile-contact-link" : "button button-small"}
        href="/contact"
        aria-label={mobile ? undefined : "Contact the lab"}
      >
        {mobile ? "Contact the lab" : "Contact"}
      </Link>
    </nav>
  );
}
