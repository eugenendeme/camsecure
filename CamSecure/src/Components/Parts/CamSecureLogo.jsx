/**
 * CamSecureLogo
 * A custom shield logo with three vertical color bands (green | red | yellow)
 * and a yellow star centred on the red band.
 *
 * Props:
 *   size  – pixel size for width & height (default 24)
 *   className – extra classes forwarded to the outer <svg>
 */
export default function CamSecureLogo({ size = 24, className = '' }) {
  const w = size;
  const h = size;

  // Shield path (matches Lucide's Shield icon geometry, scaled to 24×24 viewBox)
  // Original Lucide path: M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z
  const shieldPath = 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z';

  // Vertical split points (in 0-24 coordinate space)
  // Green: 0 → 8  |  Red: 8 → 16  |  Yellow: 16 → 24
  const col1 = 8;
  const col2 = 16;

  // 5-point star centred at (12, 13.5), outer radius 3.2, inner radius 1.3
  function starPath(cx, cy, outerR, innerR, points = 5) {
    const pts = [];
    for (let i = 0; i < points * 2; i++) {
      const angle = (Math.PI / points) * i - Math.PI / 2;
      const r = i % 2 === 0 ? outerR : innerR;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return `M${pts.join('L')}Z`;
  }

  const star = starPath(12, 13.5, 3.2, 1.3);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      className={className}
      aria-label="CamSecure logo"
      role="img"
    >
      <defs>
        {/* Three vertical colour bands clipped to the shield shape */}
        <clipPath id="cs-shield-clip">
          <path d={shieldPath} />
        </clipPath>

        {/* Clip each band to its column */}
        <clipPath id="cs-col-green">
          <rect x="0" y="0" width={col1} height="24" />
        </clipPath>
        <clipPath id="cs-col-red">
          <rect x={col1} y="0" width={col2 - col1} height="24" />
        </clipPath>
        <clipPath id="cs-col-yellow">
          <rect x={col2} y="0" width="24" height="24" />
        </clipPath>
      </defs>

      {/* === Shield fill – three vertical bands === */}
      <g clipPath="url(#cs-shield-clip)">
        {/* Green band */}
        <rect x="0" y="0" width={col1} height="24" fill="#03aa4bff" />
        {/* Red band */}
        <rect x={col1} y="0" width={col2 - col1} height="24" fill="#CE1126" />
        {/* Yellow band */}
        <rect x={col2} y="0" width="24" height="24" fill="#FCD116" />
      </g>

      {/* === Yellow star centred on the red band === */}
      <path
        d={star}
        fill="#ffd413ff"
        clipPath="url(#cs-shield-clip)"
      />

      {/* === Shield outline stroke === */}
      <path
        d={shieldPath}
        fill="none"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
