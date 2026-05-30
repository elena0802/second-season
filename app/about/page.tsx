import Link from "next/link";
import { issueLabel, issueSeason, tagline } from "@/data/articles";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 md:px-12 md:pt-16">
      <header className="border-b border-muted/50 pb-12 md:pb-16">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
          {issueLabel} · {issueSeason}
        </p>
        <h1 className="mt-6 font-serif text-5xl tracking-[0.02em] text-foreground md:text-6xl">
          About
        </h1>
      </header>

      <div className="space-y-8 py-12 text-base leading-[1.9] text-foreground/75 md:py-16 md:text-lg">
        <p className="font-serif text-xl text-foreground/85 md:text-2xl">
          {tagline}
        </p>
        <p>
          Second Season is a quiet journal of places, moments, and the second
          season of life. 장소, 여행, 책, 그리고 일상 속에서 발견한 것들을
          천천히 기록합니다.
        </p>
        <p>
          35년간 중학교 교실에서 학생들과 함께한 시간 이후, 이제는 자신만의
          속도로 세상을 바라봅니다. 화려함보다 신중함, 많음보다 깊이를
          선택합니다.
        </p>
        <p className="text-foreground/60">
          A journal written with exceptional taste in places, travel, books,
          and everyday life—for readers who trust thoughtful discovery over
          noise.
        </p>
      </div>

      <div className="border-t border-muted/50 pt-12">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
          Begin here
        </p>
        <Link
          href="/journal"
          className="mt-4 inline-block font-serif text-3xl text-foreground transition-colors hover:text-accent"
        >
          Read the journal →
        </Link>
      </div>
    </div>
  );
}
