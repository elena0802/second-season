import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CareerTimeline from "@/components/CareerTimeline";
import EditorialImage from "@/components/EditorialImage";
import NewsletterSubscribeForm from "@/components/NewsletterSubscribeForm";
import {
  articles,
  getFeaturedArticle,
  siteImages,
  tagline,
} from "@/data/articles";
import {
  educatorProfile,
  getHomeFeaturedTimeline,
} from "@/data/educator";
import { enrichArticle, enrichArticles } from "@/lib/content";

export default function Home() {
  const featured = enrichArticle(getFeaturedArticle());
  const enrichedArticles = enrichArticles(articles);
  const [firstRow, secondRow] = [
    enrichedArticles.slice(0, 2),
    enrichedArticles.slice(2, 5),
  ];
  const featuredTimeline = getHomeFeaturedTimeline();

  return (
    <>
      {/* Hero */}
      <section className="page-shell mx-auto max-w-7xl py-12 md:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5 lg:pt-10">
            <p className="font-serif text-2xl tracking-[0.12em] text-foreground sm:text-3xl md:text-4xl md:tracking-[0.14em]">
              SECOND SEASON
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-foreground/80 sm:text-xl md:text-2xl">
              {tagline}
            </p>
            <div className="body-calm mt-10 space-y-4">
              <p>좋은 장소와 시간을 기록합니다.</p>
              <p>삶의 두 번째 계절에서 발견한 것들을 나눕니다.</p>
            </div>
            <Link
              href="/journal"
              className="mt-10 inline-block border border-foreground/20 px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent sm:mt-12 sm:px-10 sm:tracking-[0.3em]"
            >
              Explore Journal
            </Link>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <EditorialImage
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              caption={siteImages.hero.caption}
              aspect="hero"
              priority
              captionAlign="right"
            />
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="border-y border-muted/50 py-16 md:py-28">
        <div className="page-shell mx-auto max-w-2xl text-center">
          <p className="body-calm">
            Second Season is a quiet journal of places, moments, and
            well-spent days.
          </p>
          <p className="body-calm mt-8 text-foreground/65">
            35년의 교직 생활 이후에도,
            <br />
            여전히 아름다운 것을 발견하는 한 사람의 기록입니다.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="page-shell mx-auto max-w-7xl py-16 md:py-28">
        <Link href={`/journal/${featured.slug}`} className="group block min-w-0">
          <EditorialImage
            src={featured.image}
            alt={featured.imageAlt}
            caption={featured.imageCaption}
            aspect="feature"
            captionAlign="center"
          />
          <div className="mx-auto mt-10 max-w-3xl text-center md:mt-14">
            <p className="section-label">Featured Story</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground transition-colors group-hover:text-accent sm:text-4xl md:text-5xl lg:text-6xl">
              {featured.title}
            </h2>
            <p className="body-calm mt-6 whitespace-pre-line text-foreground/65 sm:mt-8">
              {featured.subtitle}
            </p>
            <p className="section-label mt-8 text-accent sm:mt-10">
              Read the story
            </p>
          </div>
        </Link>
      </section>

      {/* Latest Journal */}
      <section className="page-shell mx-auto max-w-7xl py-16 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Latest Journal</p>
            <h2 className="mt-4 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
              Recent Essays
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-xs uppercase tracking-[0.28em] text-foreground/50 transition-colors hover:text-accent"
          >
            View all
          </Link>
        </div>

        {firstRow.length > 0 && (
          <div className="mb-12 grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">
            {firstRow.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="lead" />
            ))}
          </div>
        )}

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
          {secondRow.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="magazine"
            />
          ))}
        </div>
      </section>

      {/* Places Worth Remembering */}
      <section id="places" className="bg-muted py-16 md:py-28">
        <div className="page-shell mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-foreground/50">Places</p>
            <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Places Worth Remembering
            </h2>
            <p className="body-calm mt-8 text-foreground/70 sm:mt-10">
              좋은 장소는 단순히 예쁜 곳이 아니라,
              <br />
              다시 누군가와 가고 싶은 곳입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-8">
            {siteImages.places.map((place) => (
              <div key={place.src} className="min-w-0">
                <EditorialImage
                  src={place.src}
                  alt={place.alt}
                  caption={place.caption}
                  aspect="card"
                  captionAlign="center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 교직 인생 */}
      <section className="page-shell mx-auto max-w-7xl py-16 md:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <EditorialImage
              src={educatorProfile.portrait.src}
              alt={educatorProfile.portrait.alt}
              caption={educatorProfile.portrait.caption}
              aspect="editor"
            />
          </div>
          <div className="min-w-0 lg:col-span-7 lg:pt-6">
            <p className="section-label">교직 인생</p>
            <h2 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
              {educatorProfile.headline}
            </h2>
            <p className="body-calm mt-6 sm:mt-8">{educatorProfile.subheadline}</p>
            <CareerTimeline milestones={featuredTimeline} variant="teaser" />
            <Link
              href="/about"
              className="section-label mt-8 inline-block text-accent transition-colors hover:text-foreground sm:mt-10"
            >
              교직 인생 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-muted/50 py-16 md:py-28">
        <div className="page-shell mx-auto max-w-xl text-center">
          <p className="section-label">Newsletter</p>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
            Letters from the Second Season
          </h2>
          <p className="body-calm mt-6 text-foreground/65 sm:mt-8">
            좋은 장소, 조용한 여행,
            <br />
            그리고 오래 기억하고 싶은 순간들을 가끔 보내드립니다.
          </p>
          <NewsletterSubscribeForm source="home" />
        </div>
      </section>
    </>
  );
}
