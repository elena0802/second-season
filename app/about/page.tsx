import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import { siteImages } from "@/data/articles";

export const metadata = {
  title: "About",
};

const beliefs = [
  "좋은 장소는 오래 머물고 싶은 곳입니다.",
  "좋은 시간은 천천히 발견됩니다.",
  "두 번째 계절은 끝이 아니라 새로운 호기심의 시작입니다.",
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-10 md:pt-14">
      {/* Page Hero */}
      <header className="page-shell mx-auto max-w-[760px]">
        <p className="section-label">About the Editor</p>

        <h1 className="mt-5 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-foreground sm:mt-6 sm:text-4xl md:text-5xl">
          A life spent in the classroom,
          <br />
          now spent in discovery.
        </h1>

        <p className="body-calm mt-6 text-foreground/65 sm:mt-8">
          오랫동안 학생들의 길을 함께 고민해온 선생님이,
          <br className="hidden sm:block" />
          이제는 삶의 두 번째 계절에서 만난 장소와 순간들을 기록합니다.
        </p>
      </header>

      {/* Editorial Image */}
      <div className="page-shell mx-auto mt-12 max-w-4xl md:mt-16">
        <EditorialImage
          src={siteImages.editor.src}
          alt={siteImages.editor.alt}
          caption={siteImages.editor.caption}
          aspect="feature"
          priority
          captionAlign="center"
        />
      </div>

      {/* Body */}
      <div className="page-shell mx-auto mt-12 max-w-[760px] space-y-8 sm:space-y-10 md:mt-20">
        <p className="body-reading">
          35년 넘게 중학교에서 진로교사로 일했습니다. 아이들이 자신의 길을
          찾을 때까지, 같은 질문을 여러 번 함께했습니다. 무엇을 좋아하는지,
          무엇을 두려워하는지, 어떤 하루가 자신에게 맞는지—그 대화들이 제
          시간의 중심이었습니다.
        </p>
        <p className="body-reading">
          명예퇴직 후, 처음으로 하루가 비어 있는 느낌을 받았습니다. 그
          공백이 불편하기도 했지만, 곧 다른 이름으로 다가왔습니다. 여유,
          라고 부르기로 했습니다.
        </p>
        <p className="body-reading">
          이제는 좋은 장소, 조용한 여행, 오래 두고 싶은 책, 일상 속 작은
          장면들을 천천히 기록합니다. 누군가에게 길을 제시하기보다, 스스로
          발견한 것을 조용히 남기고 싶습니다.
        </p>
        <p className="body-reading">
          교육에 대한 작은 기여를 인정받아 대통령 표창을 받은 적이 있습니다.
          그것은 제게 큰 의미가 있었지만, 이 저널의 중심은 아닙니다. Second
          Season은 상을 기록하는 곳이 아니라, 여전히 아름다운 것을 발견하는
          일을 이어가는 곳입니다.
        </p>
      </div>

      {/* Editorial Belief */}
      <section className="page-shell mx-auto mt-20 max-w-[760px] md:mt-32">
        <p className="section-label">Editorial</p>
        <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
          What Second Season Believes
        </h2>

        <div className="mt-10 space-y-6 border-t border-foreground/10 pt-10 sm:mt-12 sm:space-y-8 sm:pt-12">
          {beliefs.map((belief) => (
            <p
              key={belief}
              className="font-serif text-lg leading-relaxed text-foreground/70 sm:text-xl md:text-2xl"
            >
              {belief}
            </p>
          ))}
        </div>
      </section>

      {/* Closing */}
      <div className="page-shell mx-auto mt-20 max-w-[760px] md:mt-32">
        <div className="border-t border-foreground/10 pt-12 md:pt-16">
          <p className="body-calm text-foreground/65">
            Second Season은 은퇴에 관한 기록이 아니라,
            <br className="hidden sm:block" />
            여전히 아름다운 것을 발견하는 사람의 저널입니다.
          </p>
          <Link
            href="/journal"
            className="mt-8 inline-block font-serif text-xl text-foreground transition-colors hover:text-accent sm:mt-10 sm:text-2xl md:text-3xl"
          >
            Read the Journal →
          </Link>
        </div>
      </div>
    </div>
  );
}
