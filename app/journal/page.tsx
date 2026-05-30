import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import EditorialImage from "@/components/EditorialImage";
import { articles, issueLabel, issueSeason } from "@/data/articles";

export const metadata = {
  title: "Journal",
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12 md:pt-16">
      <header className="max-w-2xl border-b border-muted/50 pb-12 md:pb-16">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
          {issueLabel} · {issueSeason}
        </p>
        <h1 className="mt-6 font-serif text-5xl tracking-[0.02em] text-foreground md:text-6xl">
          Journal
        </h1>
        <p className="mt-6 text-base leading-[1.9] text-foreground/70 md:text-lg">
          장소, 여행, 그리고 두 번째 계절의 일상을 기록합니다.
        </p>
      </header>

      <section className="py-16 md:py-20">
        <Link href={`/journal/${featured.slug}`} className="group block">
          <EditorialImage
            src={featured.image}
            alt={featured.imageAlt}
            caption={featured.imageCaption}
            aspect="feature"
            priority
            captionAlign="center"
          />
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {featured.category}
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground transition-colors group-hover:text-accent md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/65">
              {featured.excerpt}
            </p>
          </div>
        </Link>
      </section>

      <section className="border-t border-muted/50 py-16 md:py-20">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="magazine" />
          ))}
        </div>
      </section>
    </div>
  );
}
