import Link from "next/link";

export default function LabBrand() {
  return (
    <Link className="brand" href="/" aria-label="IC Engineering Lab home">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect x="8" y="8" width="24" height="24" rx="4" />
        <path d="M14 14h12v12H14zM2 13h6m-6 7h6m-6 7h6m24-14h6m-6 7h6m-6 7h6M13 2v6m7-6v6m7-6v6m-14 24v6m7-6v6m7-6v6" />
      </svg>
      <span>
        <b>DICEL</b>
        <small>Integrated Circuit Engineering Lab · DeKUT</small>
      </span>
    </Link>
  );
}
