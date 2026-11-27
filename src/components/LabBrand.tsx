import Link from "@/components/next-link";

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-label="DeICE circuit logo">
      <rect className="brand-mark-plate" x="7" y="7" width="50" height="50" />
      <rect className="brand-mark-chip" x="17" y="17" width="30" height="30" />
      <g className="brand-mark-traces" fill="none" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M17 25H9M17 32H9M17 39H9" />
        <path d="M47 25h8M47 32h8M47 39h8" />
        <path d="M25 17v-8M32 17v-8M39 17v-8" />
        <path d="M25 47v8M32 47v8M39 47v8" />
        <path d="M24 24h16v16H24z" />
        <path d="M27 27h10v10H27z" />
      </g>
      <g className="brand-mark-nodes">
        <rect x="7.2" y="23.2" width="3.6" height="3.6" />
        <rect x="7.2" y="30.2" width="3.6" height="3.6" />
        <rect x="7.2" y="37.2" width="3.6" height="3.6" />
        <rect x="53.2" y="23.2" width="3.6" height="3.6" />
        <rect x="53.2" y="30.2" width="3.6" height="3.6" />
        <rect x="53.2" y="37.2" width="3.6" height="3.6" />
      </g>
    </svg>
  );
}

export default function LabBrand() {
  return (
    <Link className="brand" href="/" aria-label="DeICE home">
      <BrandMark />
      <span className="brand-copy" aria-label="DeICE">
        <b>DeICE</b>
      </span>
    </Link>
  );
}
