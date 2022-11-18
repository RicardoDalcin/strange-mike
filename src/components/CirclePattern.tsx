interface CirclePatternProps {
  width: number;
  height: number;
  color: string;
  className?: string;
}

export const CirclePattern: React.FC<CirclePatternProps> = ({
  width,
  height,
  color,
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    viewBox={`0 0 ${width} ${height}`}
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <circle cx={3} cy={3} r={3} style={{ color }} fill="currentColor" />
      </pattern>
    </defs>
    <rect
      width={width}
      height={height}
      fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
    />
  </svg>
);
