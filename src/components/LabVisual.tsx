import Image from "next/image";

const visuals = {
  digital: {
    src: "/visuals/digital-design.svg",
    alt: "Digital IC architecture and logic synthesis layout",
    tag: "Digital IC Design",
  },
  analog: {
    src: "/visuals/analog-interface.svg",
    alt: "Analog front-end interface and signal conditioning circuit",
    tag: "Analog & Mixed-Signal",
  },
  layout: {
    src: "/visuals/physical-design.svg",
    alt: "GDSII integrated circuit physical layout and routing",
    tag: "Physical Design",
  },
  laboratory: {
    src: "/visuals/laboratory.svg",
    alt: "DeKUT CDED electronics and microchip characterization laboratory",
    tag: "Research Facility",
  },
} as const;

export function LabVisual({
  kind,
  className = "",
  showBadge = false,
}: {
  kind: keyof typeof visuals;
  className?: string;
  showBadge?: boolean;
}) {
  const visual = visuals[kind];
  return (
    <div className={`lab-visual ${className}`}>
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1200}
        height={675}
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 380px"
      />
      {showBadge && <span className="image-label">{visual.tag}</span>}
    </div>
  );
}
