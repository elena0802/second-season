import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CareerTimelinePreview from "@/components/CareerTimelinePreview";
import EditorialImage from "@/components/EditorialImage";
import NewsletterSubscribeForm from "@/components/NewsletterSubscribeForm";
import {
  articles,
  getFeaturedArticle,
  homeFeaturedStoryDisplay,
  siteImages,
} from "@/data/articles";
import { educatorProfile, getHomeTimelinePreview } from "@/data/educator";
import { enrichArticle, enrichArticles } from "@/lib/content";

export default function Home() {
  const featured = enrichArticle(getFeaturedArticle());
  const enrichedArticles = enrichArticles(articles);
  const [firstRow, secondRow] = [
    enrichedArticles.slice(0, 2),
    enrichedArticles.slice(2, 5),
  ];
  const timelinePreview = getHomeTimelinePreview();

  return (
    <>
      {/* Hero */}
      <section className="page-shell mx-auto max-w-7xl py-12 md:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5 lg:pt-10">
            <p className="section-label">SECOND SEASON</p>
            <h1 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
              한 교사의 두 번째 계절
            </h1>
            <p className="body-calm mt-6 text-foreground/80 sm:mt-8">
              교단에서 배운 것들,
              <br />
              그리고 여전히 아름다운 것을 발견하는 일상을 기록합니다.
            </p>
            <Link
              href="/journal"
              className="mt-10 inline-block border border-foreground/20 px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent hover:text-accent sm:mt-12 sm:px-10 sm:tracking-[0.3em]"
            >
              Explore Journal
            </Link>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:flex lg:items-start lg:justify-end lg:pt-10">
            <div className="w-full max-w-xl lg:max-w-lg">
              <EditorialImage
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                aspect="hero"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="page-shell mx-auto max-w-7xl py-12 md:py-20">
        <Link href={`/journal/${featured.slug}`} className="group block min-w-0">
          <div className="mx-auto max-w-5xl">
            <EditorialImage
              src={featured.image}
              alt={featured.imageAlt}
              aspect="feature"
            />
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-center md:mt-10">
            <p className="section-label">Featured Story</p>
            <h2 className="mt-4 font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl md:text-4xl lg:text-5xl">
              {homeFeaturedStoryDisplay.title}
            </h2>
            <p className="body-calm mt-5 whitespace-pre-line text-foreground/65 sm:mt-6">
              {homeFeaturedStoryDisplay.subtitle}
            </p>
            <p className="section-label mt-6 text-accent sm:mt-8">
              {homeFeaturedStoryDisplay.cta}
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
              <ArticleCard
                key={article.slug}
                article={article}
                variant="lead"
                hideCaption
              />
            ))}
          </div>
        )}

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
          {secondRow.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="magazine"
              hideCaption
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
              함께 나누고 싶은 곳들
            </h2>
            <p className="body-calm mt-8 text-foreground/70 sm:mt-10">
              좋은 장소는 예쁜 곳이 아니라,
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
                  aspect="card"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 교직 인생 */}
      <section className="page-shell mx-auto max-w-7xl py-16 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">교직 인생</p>
          <h2 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
            {educatorProfile.homeTeaser.headline}
          </h2>
          <p className="body-calm mt-6 whitespace-pre-line text-foreground/70 sm:mt-8">
            {educatorProfile.homeTeaser.subheadline}
          </p>
        </div>

        <CareerTimelinePreview milestones={timelinePreview} />

        <div className="mt-16 text-center md:mt-24">
          <Link
            href="/about"
            className="inline-block font-serif text-2xl text-foreground transition-colors hover:text-accent sm:text-3xl md:text-4xl"
          >
            {educatorProfile.homeTeaser.cta}
          </Link>
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
