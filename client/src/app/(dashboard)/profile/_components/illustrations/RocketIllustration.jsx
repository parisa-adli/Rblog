// Flat rocket lifting off a cloud (Go Pro banner)
export default function RocketIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      {/* clouds */}
      <g className="fill-secondary-0 dark:fill-primary-900/30">
        <circle cx="60" cy="170" r="30" />
        <circle cx="100" cy="160" r="36" />
        <circle cx="145" cy="172" r="28" />
        <rect x="30" y="170" width="150" height="30" />
      </g>

      <g transform="rotate(30 110 90)">
        {/* flame */}
        <path d="M100 140c0 18 10 30 10 30s10-12 10-30z" className="fill-warning" />
        <path d="M104 140c0 10 6 18 6 18s6-8 6-18z" className="fill-primary-50" />
        {/* fins */}
        <path d="M88 108l-18 30 22-6z" className="fill-primary-700" />
        <path d="M132 108l18 30-22-6z" className="fill-primary-700" />
        {/* body */}
        <path d="M110 20c22 18 30 52 24 120H86c-6-68 2-102 24-120z" className="fill-primary-100" />
        <path d="M110 20c10 8 18 20 21 36H89c3-16 11-28 21-36z" className="fill-primary-900" />
        <circle cx="110" cy="82" r="13" className="fill-primary-900" />
        <circle cx="110" cy="82" r="7" className="fill-primary-300" />
        <rect x="88" y="134" width="44" height="8" rx="3" className="fill-primary-700" />
      </g>
    </svg>
  );
}
