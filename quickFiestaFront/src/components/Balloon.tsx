// Step 1: Define allowed color keys
type BalloonColor = 'red' | 'blue' | 'green' | 'pink';

interface BalloonProps {
  color?: BalloonColor;
}

export function Balloon({ color = 'red' }: BalloonProps) {
  // Step 2: colors object
  const colors: Record<BalloonColor, string[]> = {
    red: ['#ff6b6b', '#ee5a6f', '#c92a2a'],
    blue: ['#4dabf7', '#339af0', '#1864ab'],
    green: ['#51cf66', '#40c057', '#2b8a3e'],
    pink: ['#f11a62', '#ee5a6f', '#c92a2a'],
  };

  // Step 3: TS now knows color is valid key
  const [light, mid, dark] = colors[color];

  return (
    <svg
      width="200"
      height="320"
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${color}-gradient`} cx="40%" cy="35%">
          <stop offset="0%" stopColor={light} />
          <stop offset="50%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>

        <radialGradient id="shineGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Balloon */}
      <ellipse cx="100" cy="90" rx="70" ry="85" fill={`url(#${color}-gradient)`} />

      {/* Shine */}
      <ellipse cx="75" cy="65" rx="25" ry="35" fill="url(#shineGradient)" />

      {/* Knot */}
      <ellipse cx="100" cy="185" rx="8" ry="6" fill={dark} />

      {/* String */}
      <path
        d="M 100 191 Q 110 210, 95 235 Q 85 260, 105 285 Q 115 300, 100 315"
        stroke="#666"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
