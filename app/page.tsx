import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CareerTimelinePreview from "@/components/CareerTimelinePreview";
import EditorialImage from "@/components/EditorialImage";
import NewsletterSubscribeForm from "@/components/NewsletterSubscribeForm";
import {
  getFeaturedArticle,
  getHomeRecentPosts,
  homeFeaturedStoryDisplay,
  siteImages,
} from "@/data/articles";
import { educatorProfile, getHomeTimelinePreview } from "@/data/educator";
import { enrichArticle, enrichArticles } from "@/lib/content";

export default function Home() {
  const featured = enrichArticle(getFeaturedArticle());
  const recentPosts = enrichArticles(getHomeRecentPosts());
  const [firstRow, secondRow] = [
    recentPosts.slice(0, 2),
    recentPosts.slice(2, 5),
  ];
  const timelinePreview = getHomeTimelinePreview();

  return (
    <>
      {/* Hero */}
      <section className="page-shell mx-auto max-w-7xl py-12 md:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-6 lg:pt-10">
            <p className="section-label">SECOND SEASON</p>
            <h1 className="mt-5 font-serif text-3xl leading-snug text-foreground sm:text-4xl md:text-5xl">
              박옥주 교사의
              <br />
              <span className="whitespace-nowrap">두 번째 계절 이야기</span>
            </h1>
            <p className="body-calm mt-6 text-foreground/80 sm:mt-8">
              교단에서 배운 것들,
              <br />
              그리고 여전히 아름다운 것을 발견하는 일상을 기록합니다.
            </p>
            <Link href="/journal" className="home-btn mt-10 sm:mt-12">
              이야기 더보기 →
            </Link>
          </div>

          <div className="min-w-0 lg:col-span-6 lg:flex lg:items-start lg:justify-end lg:pt-10">
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
          <div className="mx-auto mt-5 max-w-2xl text-center md:mt-6">
            <p className="section-label">Featured Story</p>
            <h2 className="mt-3 font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl md:text-4xl lg:text-5xl">
              {homeFeaturedStoryDisplay.title}
            </h2>
            <p className="body-calm mt-4 whitespace-pre-line text-foreground/65 sm:mt-5">
              {homeFeaturedStoryDisplay.subtitle}
            </p>
            <span className="home-btn mt-5 sm:mt-6">
              두 번째 계절 읽기 →
            </span>
          </div>
        </Link>
      </section>

      {/* Latest Journal */}
      <section className="page-shell mx-auto max-w-7xl py-16 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Latest Journal</p>
            <h2 className="mt-4 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
              최근 글
            </h2>
          </div>
          <Link href="/journal" className="home-btn shrink-0">
            전체보기 →
          </Link>
        </div>

        {firstRow.length > 0 && (
          <div className="mb-16 grid gap-10 sm:mb-20 sm:gap-12 lg:grid-cols-2 lg:mb-24 lg:gap-14">
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
          <p className="section-label">TEACHING LIFE</p>
          <h2 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
            {educatorProfile.homeTeaser.headline}
          </h2>
          <p className="body-calm mt-6 whitespace-pre-line text-foreground/70 sm:mt-8">
            {educatorProfile.homeTeaser.subheadline}
          </p>
        </div>

        <CareerTimelinePreview milestones={timelinePreview} />

        <div className="mt-16 text-center md:mt-24">
          <Link href="/about" className="home-btn">
            교직 인생 전체 보기 →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-muted/50 py-16 md:py-28">
        <div className="page-shell mx-auto max-w-xl text-center">
          <p className="section-label">Newsletter</p>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
            Second Season의 편지
          </h2>
          <p className="body-calm mt-6 text-foreground/65 sm:mt-8">
            두 번째 계절의 기록을,
            <br />
            좋은 장소와 조용한 순간과 함께 가끔 편지로 나눕니다.
          </p>
          <NewsletterSubscribeForm source="home" variant="editorial" />
        </div>
      </section>
    </>
  );
}
