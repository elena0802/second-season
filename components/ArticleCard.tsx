import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
  variant?: "default" | "magazine";
  imageTone?: "cream" | "warm" | "sage" | "linen";
};

export default function ArticleCard({
  article,
  variant = "default",
  imageTone = "linen",
}: ArticleCardProps) {
  if (variant === "magazine") {
    return (
      <article className="group">
        <Link href={`/journal/${article.slug}`} className="block">
          <EditorialImage aspect="card" tone={imageTone} />
          <div className="mt-7">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
              {article.category}
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-accent md:text-[1.65rem]">
              {article.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">
              {article.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`} className="block">
        <EditorialImage aspect="card" tone={imageTone} />
        <div className="mt-6">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
            {article.category} · {article.readTime}
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/65">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
