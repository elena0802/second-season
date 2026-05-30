import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import EditorialImage from "@/components/EditorialImage";
import { articles, getFeaturedArticle, tagline } from "@/data/articles";

const cardTones = ["linen", "cream", "warm", "sage", "linen"] as const;

export default function Home() {
  const featured = getFeaturedArticle();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-lg">
            <p className="font-serif text-3xl tracking-[0.14em] text-foreground md:text-4xl">
              SECOND SEASON
            </p>
            <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/80 md:text-2xl">
              {tagline}
            </p>
            <div className="mt-10 space-y-4 text-base leading-[1.9] text-foreground/70 md:text-[1.05rem]">
              <p>좋은 장소와 시간을 기록합니다.</p>
              <p>삶의 두 번째 계절에서 발견한 것들을 나눕니다.</p>
            </div>
            <Link
              href="/journal"
              className="mt-12 inline-block border border-foreground/20 px-10 py-3.5 text-[0.7rem] uppercase tracking-[0.3em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Explore Journal
            </Link>
          </div>

          <div className="lg:pl-8">
            <EditorialImage aspect="hero" tone="warm" className="w-full" />
            <p className="mt-4 text-right text-[0.65rem] uppercase tracking-[0.22em] text-foreground/40">
              Afternoon light · Coffee · Books
            </p>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="border-y border-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-12">
          <p className="text-base leading-[1.9] text-foreground/75 md:text-lg">
            Second Season is a quiet journal of places, moments, and
            well-spent days.
          </p>
          <p className="mt-8 text-base leading-[1.9] text-foreground/65 md:text-lg">
            35년의 교직 생활 이후에도,
            <br />
            여전히 아름다운 것을 발견하는 한 사람의 기록입니다.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <Link href={`/journal/${featured.slug}`} className="group block">
          <EditorialImage aspect="feature" tone="sage" className="w-full" />
          <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
              Featured Story
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-5xl lg:text-6xl">
              {featured.title}
            </h2>
            <p className="mt-8 whitespace-pre-line text-base leading-[1.9] text-foreground/65 md:text-lg">
              {featured.subtitle}
            </p>
            <p className="mt-10 text-[0.65rem] uppercase tracking-[0.28em] text-accent">
              Read the story
            </p>
          </div>
        </Link>
      </section>

      {/* Latest Journal */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
              Latest Journal
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Recent Essays
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50 transition-colors hover:text-accent"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-10">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="magazine"
              imageTone={cardTones[index % cardTones.length]}
            />
          ))}
        </div>
      </section>

      {/* Places Worth Remembering */}
      <section
        id="places"
        className="bg-muted py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/50">
            Places
          </p>
          <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">
            Places Worth Remembering
          </h2>
          <p className="mt-10 text-base leading-[1.9] text-foreground/70 md:text-lg">
            좋은 장소는 단순히 예쁜 곳이 아니라,
            <br />
            다시 누군가와 가고 싶은 곳입니다.
          </p>
        </div>
      </section>

      {/* About the Editor */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage aspect="card" tone="cream" className="max-w-sm" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
              About the Editor
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-snug text-foreground md:text-4xl">
              A life spent in the classroom,
              <br />
              now spent in discovery.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-[1.9] text-foreground/70 md:text-[1.05rem]">
              <p>
                35년 동안 중학교 교실에서 학생들의 미래를 함께 고민했습니다.
                진로 상담, 아침 조회, 졸업식—그 모든 순간이 소중했습니다.
              </p>
              <p>
                은퇴 후에는 좋은 장소, 조용한 여행, 오래 두고 싶은 책을
                기록하기 시작했습니다. 화려한 삶이 아니라, 신중하게 고른
                순간들을 나눕니다.
              </p>
              <p className="text-foreground/55">
                This person spent 35 years helping students discover their
                future. Today, they document places, moments, and thoughtful
                living.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-block text-[0.65rem] uppercase tracking-[0.28em] text-accent transition-colors hover:text-foreground"
            >
              More about Second Season
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6 text-center md:px-12">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
            Newsletter
          </p>
          <h2 className="mt-5 font-serif text-3xl text-foreground md:text-4xl">
            Letters from the Second Season
          </h2>
          <p className="mt-8 text-base leading-[1.9] text-foreground/65">
            좋은 장소, 조용한 여행,
            <br />
            그리고 오래 기억하고 싶은 순간들을 가끔 보내드립니다.
          </p>
          <form className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-0">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-foreground/15 bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/35 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="border border-foreground/15 px-8 py-3.5 text-[0.65rem] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent sm:border-l-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
