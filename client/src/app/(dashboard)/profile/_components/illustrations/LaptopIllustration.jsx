// Flat laptop + feather-in-a-pot with soft blobs (header illustration)
export default function LaptopIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 340 190" className={className} aria-hidden="true" focusable="false">
      {/* soft blobs */}
      <path
        d="M40 150c-30-40 0-95 55-100 30-3 45-35 95-38 60-4 115 30 120 85 4 45-20 80-60 90H60c-10-8-15-20-20-37z"
        className="fill-primary-100 dark:fill-primary-900/20"
      />
      <circle cx="300" cy="40" r="28" className="fill-primary-200/60 dark:fill-primary-900/30" />
      <circle cx="30" cy="70" r="12" className="fill-primary-200/60 dark:fill-primary-900/30" />

      {/* motion strokes */}
      <g className="stroke-primary-700" strokeWidth="4" strokeLinecap="round">
        <path d="M58 52l14 14" />
        <path d="M48 78h18" />
        <path d="M52 100l14-6" />
      </g>

      {/* laptop screen */}
      <g transform="rotate(-6 170 100)">
        <rect x="95" y="38" width="150" height="104" rx="10" className="fill-primary-900" />
        <rect x="104" y="47" width="132" height="86" rx="6" className="fill-primary-50" />
        <rect x="114" y="62" width="44" height="34" rx="5" className="fill-primary-400" />
        <path d="M118 92l12-14 9 9 6-6 10 11z" className="fill-primary-800" />
        <circle cx="146" cy="70" r="4" className="fill-primary-100" />
        <rect x="166" y="64" width="56" height="6" rx="3" className="fill-primary-200" />
        <rect x="166" y="78" width="44" height="6" rx="3" className="fill-primary-200" />
        <rect x="114" y="106" width="108" height="6" rx="3" className="fill-primary-200" />
        <rect x="114" y="118" width="80" height="6" rx="3" className="fill-primary-200" />
      </g>
      {/* laptop base */}
      <path d="M78 150h190l-10 12H88z" className="fill-primary-800" />

      {/* feather in a pot */}
      <rect x="262" y="128" width="36" height="34" rx="6" className="fill-primary-400" />
      <rect x="258" y="122" width="44" height="10" rx="4" className="fill-primary-600" />
      <path
        d="M282 124c-6-30 6-70 34-96 4 30-6 66-26 86"
        className="fill-primary-700"
      />
      <path d="M282 124c8-30 18-58 32-90" className="stroke-primary-100" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
