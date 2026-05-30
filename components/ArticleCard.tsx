import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
  variant?: "default" | "magazine" | "lead";
};

export default function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  const imageSrc = article.image ?? "/images/hero.jpg";

  if (variant === "lead") {
    return (
      <article className="group">
        <Link href={`/journal/${article.slug}`} className="block">
          <EditorialImage
            src={imageSrc}
            alt={article.imageAlt}
            caption={article.imageCaption}
            aspect="feature"
          />
          <div className="mt-8 max-w-xl">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {article.category}
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-snug text-foreground transition-colors group-hover:text-accent md:text-4xl">
              {article.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/65">
              {article.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "magazine") {
    return (
      <article className="group">
        <Link href={`/journal/${article.slug}`} className="block">
          <EditorialImage
            src={imageSrc}
            alt={article.imageAlt}
            caption={article.imageCaption}
            aspect="card"
          />
          <div className="mt-6">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {article.category}
            </p>
            <h3 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent md:text-2xl">
              {article.title}
            </h3>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`} className="block">
        <EditorialImage
          src={imageSrc}
          alt={article.imageAlt}
          caption={article.imageCaption}
          aspect="card"
        />
        <div className="mt-6">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
            {article.category} · {article.readTime}
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/65">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
