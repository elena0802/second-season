import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { Article } from "@/data/articles";

type RelatedArticleCardProps = {
  article: Article;
};

export default function RelatedArticleCard({ article }: RelatedArticleCardProps) {
  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`} className="block">
        <EditorialImage
          src={article.image}
          alt={article.imageAlt}
          aspect="card"
        />
        <div className="mt-5">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-secondary">
            {article.category}
          </p>
          <h3 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent">
            {article.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
