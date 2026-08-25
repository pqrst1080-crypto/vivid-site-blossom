import heroVideo from "@/assets/home_anim.mp4.asset.json";

/** Looping hero motion mark. */
export function Cube({ size = 168 }: { size?: number }) {
  return (
    <div
      className="relative mix-blend-multiply dark:mix-blend-screen"
      style={{
        width: size * 2,
        maxWidth: "100%",
        aspectRatio: "16 / 9",
      }}
      aria-hidden="true"
    >
      <video
        className="h-full w-full object-cover"
        style={{
          maskImage:
            "radial-gradient(ellipse 78% 78% at 50% 50%, #000 62%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 78% 78% at 50% 50%, #000 62%, transparent 100%)",
        }}
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
