import heroVideo from "@/assets/home_anim.webm";

/** Looping hero motion mark. */
export function Cube({ size = 168 }: { size?: number }) {
  return (
    <div
      className="relative"
      style={{
        width: size * 2,
        maxWidth: "100%",
        aspectRatio: "16 / 9",
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
