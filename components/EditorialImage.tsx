type EditorialImageProps = {
  aspect?: "hero" | "feature" | "card" | "wide";
  tone?: "cream" | "warm" | "sage" | "linen";
  className?: string;
};

const aspectClasses = {
  hero: "aspect-[4/5] md:aspect-[3/4]",
  feature: "aspect-[16/10] md:aspect-[2/1]",
  card: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

const toneClasses = {
  cream: "bg-[#EDE8DF]",
  warm: "bg-[#E3DACE]",
  sage: "bg-[#D8D0C4]",
  linen: "bg-[#E8E2D8]",
};

export default function EditorialImage({
  aspect = "card",
  tone = "warm",
  className = "",
}: EditorialImageProps) {
  return (
    <div
      className={`${aspectClasses[aspect]} ${toneClasses[tone]} ${className}`}
      aria-hidden="true"
    />
  );
}
