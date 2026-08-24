import heroVideo from "@/assets/home_anim.mp4.asset.json";

/** Looping hero motion mark. */
export function Cube({ size = 168 }: { size?: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-primary/25"
      style={{
        width: size * 2,
        maxWidth: "100%",
        aspectRatio: "16 / 9",
        boxShadow: "var(--shadow-soft)",
      }}
      aria-hidden="true"
    >
      <video
        className="h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
