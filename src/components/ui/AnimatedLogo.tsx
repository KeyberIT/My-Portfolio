export default function AnimatedLogo() {
  return (
    <div className="flex justify-center items-center relative w-[300px] h-[300px] mx-auto">
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 84 96"
        className="w-full h-full text-green fill-none stroke-current stroke-[5px]"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      >
        <g transform="translate(3.000000, 3.000000)">
          <polygon
            id="Shape"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
            className="animate-draw"
            style={{
              strokeDasharray: '300',
              strokeDashoffset: '300',
            }}
          />
          <text
            x="39"
            y="56"
            textAnchor="middle"
            className="animate-fade-in fill-green stroke-none font-sans font-semibold text-[44px]"
            style={{
              opacity: 0,
            }}
          >
            K
          </text>
        </g>
      </svg>
    </div>
  );
}
