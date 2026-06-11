import Link from "next/link";
import CareerTimeline from "@/components/CareerTimeline";
import EditorialImage from "@/components/EditorialImage";
import {
  educatorProfile,
  getCareerTimeline,
} from "@/data/educator";

export const metadata = {
  title: "교직 인생",
  description:
    "37년 동안 교실에서 보낸 시간—첫 발령부터 진로교사, 그리고 다시 찾아온 학생들까지.",
};

export default function AboutPage() {
  const timeline = getCareerTimeline();

  return (
    <div className="pb-24 pt-10 md:pt-14">
      {/* Page Hero */}
      <header className="page-shell mx-auto max-w-[760px] text-center">
        <p className="section-label">교직 인생</p>

        <h1 className="mt-5 font-serif text-2xl leading-[1.15] tracking-[0.01em] text-foreground sm:mt-6 sm:text-3xl md:text-4xl">
          {educatorProfile.headlineLines[0]}
          <br />
          {educatorProfile.headlineLines[1]}
        </h1>

        <p className="body-calm mx-auto mt-6 max-w-xl whitespace-pre-line text-foreground/65 sm:mt-8">
          {educatorProfile.subheadline}
        </p>
      </header>

      {/* Editorial Image */}
      <div className="page-shell mx-auto mt-12 max-w-4xl md:mt-16">
        <EditorialImage
          src={educatorProfile.portrait.src}
          alt={educatorProfile.portrait.alt}
          caption={educatorProfile.portrait.caption}
          aspect="feature"
          priority
          captionAlign="center"
        />
      </div>

      <div className="page-shell mx-auto mt-12 max-w-[760px] md:mt-20">
        <p className="body-reading">{educatorProfile.openingNarrative}</p>
      </div>

      <div className="page-shell mx-auto max-w-[760px]">
        <CareerTimeline
          milestones={timeline}
          variant="full"
          sectionTitle={educatorProfile.timelineSectionTitle}
        />
      </div>

      {/* Closing */}
      <div className="page-shell mx-auto mt-20 max-w-[760px] md:mt-32">
        <div className="border-t border-foreground/10 pt-12 text-center md:pt-16">
          <p className="body-calm mx-auto max-w-xl text-foreground/65">
            Second Season은 은퇴에 관한 기록이 아니라,
            <br className="hidden sm:block" />
            여전히 아름다운 것을 발견하는 사람의 저널입니다.
          </p>
          <Link
            href="/journal/after-35-years-teaching"
            className="mt-8 inline-block font-serif text-xl text-foreground transition-colors hover:text-accent sm:mt-10 sm:text-2xl md:text-3xl"
          >
            그리고, 그 이후의 이야기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
