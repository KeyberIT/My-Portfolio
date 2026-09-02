export default function Logo() {
  return (
    <div className="relative group w-10 h-10 transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer">
      {/* Hexagon Outline (stays behind) */}
      <div className="absolute inset-0 -z-10 transition-transform duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[3px]">
        <svg id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className="w-10 h-10 text-green fill-current stroke-current stroke-[5px]">
          <title>Hexagon</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              />
            </g>
          </g>
        </svg>
      </div>
      
      {/* Main Logo (Filled Hexagon + Text) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className="w-10 h-10 text-green">
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                className="stroke-current stroke-[5px] transition-colors duration-300"
                style={{ fill: 'var(--color-navy)' }}
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              />
              <text 
                x="39" 
                y="61"
                fill="currentColor"
                fontSize="45" 
                fontFamily="var(--font-sans), sans-serif" 
                fontWeight="bold" 
                textAnchor="middle" 
                stroke="none"
              >
                K
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
