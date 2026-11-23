import Link from "@/components/next-link";

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-label="DICEL circuit logo">
      <rect className="brand-mark-plate" x="7" y="7" width="50" height="50" rx="12" />
      <rect className="brand-mark-chip" x="17" y="17" width="30" height="30" rx="7" />
      <g className="brand-mark-traces" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 25H9M17 32H9M17 39H9" />
        <path d="M47 25h8M47 32h8M47 39h8" />
        <path d="M25 17v-8M32 17v-8M39 17v-8" />
        <path d="M25 47v8M32 47v8M39 47v8" />
        <path d="M24 24h16v16H24z" />
        <path d="M27 27h10v10H27z" />
      </g>
      <g className="brand-mark-nodes">
        <circle cx="9" cy="25" r="1.8" />
        <circle cx="9" cy="32" r="1.8" />
        <circle cx="9" cy="39" r="1.8" />
        <circle cx="55" cy="25" r="1.8" />
        <circle cx="55" cy="32" r="1.8" />
        <circle cx="55" cy="39" r="1.8" />
      </g>
    </svg>
  );
}

export default function LabBrand() {
  return (
    <Link className="brand" href="/" aria-label="DICEL home">
      <BrandMark />
      <span className="brand-copy" aria-label="DICEL">
        <b>DICEL</b>
      </span>
    </Link>
  );
}
