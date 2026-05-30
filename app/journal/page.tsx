import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import EditorialImage from "@/components/EditorialImage";
import { articles, issueLabel, issueSeason } from "@/data/articles";
import { enrichArticles } from "@/lib/content";

export const metadata = {
  title: "Journal",
};

export default function JournalPage() {
  const [featured, ...rest] = enrichArticles(articles);

  return (
    <div className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pt-14">
      <header className="max-w-2xl border-b border-muted/50 pb-10 md:pb-16">
        <p className="section-label">
          {issueLabel} · {issueSeason}
        </p>
        <h1 className="mt-5 font-serif text-4xl tracking-[0.02em] text-foreground sm:text-5xl md:text-6xl">
          Journal
        </h1>
        <p className="body-calm mt-5 text-foreground/70 sm:mt-6">
          장소, 여행, 그리고 두 번째 계절의 일상을 기록합니다.
        </p>
      </header>

      <section className="py-12 md:py-20">
        <Link href={`/journal/${featured.slug}`} className="group block min-w-0">
          <EditorialImage
            src={featured.image}
            alt={featured.imageAlt}
            caption={featured.imageCaption}
            aspect="feature"
            priority
            captionAlign="center"
          />
          <div className="mx-auto mt-10 max-w-2xl text-center md:mt-12">
            <p className="section-label">{featured.category}</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground transition-colors group-hover:text-accent sm:text-4xl md:text-5xl">
              {featured.title}
            </h2>
            <p className="body-calm mt-4 text-foreground/65">
              {featured.excerpt}
            </p>
          </div>
        </Link>
      </section>

      <section className="border-t border-muted/50 py-12 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="magazine" />
          ))}
        </div>
      </section>
    </div>
  );
}
