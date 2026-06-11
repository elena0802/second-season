import type { CareerMilestone } from "@/types/educator";

type CareerTimelineProps = {
  milestones: CareerMilestone[];
  variant?: "full" | "teaser";
  sectionTitle?: string;
};

export default function CareerTimeline({
  milestones,
  variant = "full",
  sectionTitle,
}: CareerTimelineProps) {
  const isTeaser = variant === "teaser";

  return (
    <section
      aria-label="교직 인생 타임라인"
      className={isTeaser ? "mt-8 sm:mt-10" : "mt-12 md:mt-16"}
    >
      {!isTeaser && (
        <div className="mb-10 md:mb-14">
          <p className="section-label">Timeline</p>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
            {sectionTitle}
          </h2>
        </div>
      )}

      <ol className="relative border-l border-foreground/10 pl-6 sm:pl-8">
        {milestones.map((milestone) => (
          <li
            key={milestone.id}
            className={
              isTeaser
                ? "relative pb-8 last:pb-0 sm:pb-10"
                : "relative pb-10 last:pb-0 sm:pb-12 md:pb-14"
            }
          >
            <div
              className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border border-foreground/20 bg-background sm:-left-[calc(2rem+5px)]"
              aria-hidden
            />

            <p className="section-label">
              {isTeaser ? (
                <>
                  {String(milestone.chapter).padStart(2, "0")} · {milestone.period}
                </>
              ) : (
                <>
                  Chapter {milestone.chapter} · {milestone.period}
                </>
              )}
            </p>

            <h3
              className={
                isTeaser
                  ? "mt-3 font-serif text-xl leading-snug text-foreground sm:text-2xl"
                  : "mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl"
              }
            >
              {milestone.title}
            </h3>

            <p
              className={
                isTeaser
                  ? "body-calm mt-3 text-foreground/70 sm:mt-4"
                  : "body-reading mt-4 sm:mt-5"
              }
            >
              {milestone.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
