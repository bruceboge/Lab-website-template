import Image from "@/components/next-image";

const visuals = {
  digital: {
    src: "/visuals/DICEL ENTRANCE VIEW2.jpg",
    alt: "Research posters displayed in the DICEL workspace",
    tag: "Digital IC Design",
  },
  analog: {
    src: "/visuals/OFFICE 1.jpg",
    alt: "Interior workspace at the DeKUT Integrated Circuit Engineering Lab",
    tag: "Analog & Mixed-Signal",
  },
  layout: {
    src: "/visuals/DICEL ENTRANCE VIEW.jpg",
    alt: "Research posters and work area inside the DICEL workspace",
    tag: "Physical Design",
  },
  laboratory: {
    src: "/visuals/OFFICE 2.jpg",
    alt: "Equipment and workstations inside the DeKUT laboratory",
    tag: "Research Facility",
  },
} as const;

export function LabVisual({
  kind,
  src,
  alt,
  className = "",
  showBadge = false,
  eager = false,
}: {
  kind: keyof typeof visuals;
  src?: string;
  alt?: string;
  className?: string;
  showBadge?: boolean;
  eager?: boolean;
}) {
  const visual = visuals[kind];
  return (
    <div className={`lab-visual ${className}`}>
      <Image
        src={src ?? visual.src}
        alt={alt ?? visual.alt}
        width={1200}
        height={675}
        loading={eager ? "eager" : undefined}
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 380px"
      />
      {showBadge && <span className="image-label">{visual.tag}</span>}
    </div>
  );
}
