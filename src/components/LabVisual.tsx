import Image from "@/components/next-image";

const visuals = {
  digital: {
    src: "/visuals/digital-design.svg",
    alt: "Illustration of an integrated circuit package with digital signal-routing traces",
    tag: "Digital IC Design",
  },
  analog: {
    src: "/visuals/analog-interface.svg",
    alt: "Illustration of an analog front-end and signal-conditioning circuit",
    tag: "Analog & Mixed-Signal",
  },
  layout: {
    src: "/visuals/physical-design.svg",
    alt: "Illustration of an integrated-circuit physical layout and routing",
    tag: "Physical Design",
  },
  laboratory: {
    src: "/visuals/laboratory.svg",
    alt: "Illustrative placeholder for an electronics laboratory workspace, not a photograph of the DeKUT facility",
    tag: "Research Facility",
  },
} as const;

export function LabVisual({
  kind,
  className = "",
  showBadge = false,
  eager = false,
}: {
  kind: keyof typeof visuals;
  className?: string;
  showBadge?: boolean;
  eager?: boolean;
}) {
  const visual = visuals[kind];
  return (
    <div className={`lab-visual ${className}`}>
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1200}
        height={675}
        loading={eager ? "eager" : undefined}
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 380px"
      />
      {showBadge && <span className="image-label">{visual.tag}</span>}
    </div>
  );
}
