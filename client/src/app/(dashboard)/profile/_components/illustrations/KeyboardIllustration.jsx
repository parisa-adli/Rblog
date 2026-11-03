// Flat isometric keyboard (sidebar upgrade card)
const KEYS = Array.from({ length: 4 }, (_, row) =>
  Array.from({ length: 7 }, (_, col) => ({ row, col }))
).flat();

export default function KeyboardIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 180 110" className={className} aria-hidden="true" focusable="false">
      <g transform="translate(10 20) skewY(-12)">
        <rect x="0" y="22" width="160" height="70" rx="10" className="fill-primary-300" />
        <rect x="0" y="16" width="160" height="70" rx="10" className="fill-secondary-0" />
        {KEYS.map(({ row, col }) => (
          <rect
            key={`${row}-${col}`}
            x={10 + col * 21}
            y={24 + row * 15}
            width="17"
            height="11"
            rx="3"
            className={(row + col) % 3 === 0 ? "fill-primary-900" : "fill-primary-200"}
          />
        ))}
      </g>
    </svg>
  );
}
