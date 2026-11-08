import Link from "next/link";

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 180 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="42" y="42" width="96" height="96" rx="10" fill="currentColor" />

        <g stroke="#ffffff" strokeWidth="3.2">
          <path d="M54 59h36M54 79h36M54 99h36M54 119h36" />
          <path d="M90 54v36M110 54v36M130 54v36M90 90h36M110 110h36" />
          <rect x="72" y="72" width="36" height="36" rx="4" fill="#ffffff" opacity="0.25" />
        </g>

        <g stroke="currentColor" strokeWidth="3">
          <path d="M90 18v18M90 162v18M18 90h18M162 90h18" />
          <path d="M52 18v18M128 18v18M52 162v18M128 162v18" />
          <path d="M18 52h18M18 128h18M162 52h18M162 128h18" />
          <path d="M90 42v-16M90 138v16M42 90h-16M138 90h16" />
          <circle cx="90" cy="90" r="5" fill="currentColor" />
        </g>

        <g fill="#ffffff" fontSize="18" fontWeight="700" fontFamily="Arial, sans-serif">
          <text x="90" y="96" textAnchor="middle">IC</text>
        </g>
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
