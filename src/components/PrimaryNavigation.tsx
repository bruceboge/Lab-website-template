import Link from "@/components/next-link";
import NavigationDropdown from "@/components/NavigationDropdown";

const resourceLinks = [
  { label: "All resources", href: "/resources" },
  { label: "Publications", href: "/resources/publications" },
  { label: "Courses", href: "/resources/courses" },
  { label: "IC Design Process", href: "/resources/courses/ic-design-process" },
  { label: "Inventory", href: "/resources/inventory" },
  { label: "Tools", href: "/resources/tools" },
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

const mobileLinks = [
  { label: "Home", href: "/" },
  ...aboutLinks,
  ...resourceLinks,
  ...linksAfterResources,
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
  if (mobile) {
    return (
      <nav
        aria-label="Main navigation"
        className="mobile-nav-links"
        id={id}
        hidden={hidden}
      >
        {mobileLinks.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="button mobile-contact-link" href="/contact">
          Contact Us
        </Link>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Main navigation"
      className="desktop-nav"
      id={id}
      hidden={hidden}
    >
      <Link href="/">Home</Link>
      <NavigationDropdown
        label="About"
        links={aboutLinks}
        id="about-menu-desktop"
        className="nav-dropdown--about"
      />
      <NavigationDropdown
        label="Resources"
        links={resourceLinks}
        id="resources-menu-desktop"
        className="nav-dropdown--resources"
      />
      {linksAfterResources.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
      <Link
        className="button button-small"
        href="/contact"
        aria-label="Contact the lab"
      >
        Contact Us
      </Link>
    </nav>
  );
}
