/** Pure-CSS 3D tumbling cube used as the hero mark. */
export function Cube({ size = 168 }: { size?: number }) {
  const half = size / 2;
  const faces = [
    `rotateY(0deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];

  return (
    <div
      className="relative"
      style={{ width: size, height: size, perspective: `${size * 5}px` }}
      aria-hidden="true"
    >
      <div className="animate-tumble relative h-full w-full">
        {faces.map((transform, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm"
            style={{ transform, boxShadow: "var(--shadow-soft)" }}
          >
            <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1.5 p-1.5">
              {Array.from({ length: 9 }).map((_, j) => (
                <span
                  key={j}
                  className="rounded-[6px]"
                  style={{
                    background: "var(--gradient-primary)",
                    opacity: 0.35 + ((i * 3 + j) % 6) * 0.11,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
