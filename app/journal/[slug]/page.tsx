import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleMarkdown from "@/components/ArticleMarkdown";
import EditorialImage from "@/components/EditorialImage";
import RelatedArticleCard from "@/components/RelatedArticleCard";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import {
  contentExists,
  enrichArticles,
  getArticleContent,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !contentExists(slug)) {
    notFound();
  }

  const { frontmatter, content } = getArticleContent(slug);
  const relatedArticles = enrichArticles(getRelatedArticles(slug, 3));

  return (
    <article className="pb-24 pt-10 md:pt-14">
      {/* Article Hero */}
      <header className="page-shell mx-auto max-w-4xl">
        <Link
          href="/journal"
          className="text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
        >
          Journal
        </Link>

        <p className="section-label mt-8 sm:mt-10">{article.category}</p>

        <h1 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {article.title}
        </h1>

        <p className="mt-5 whitespace-pre-line font-serif text-lg leading-relaxed text-foreground/60 sm:mt-6 sm:text-xl md:text-2xl">
          {frontmatter.subtitle}
        </p>

        <p className="mt-6 text-xs tracking-[0.12em] text-foreground/45 sm:mt-8">
          {article.date}
        </p>
      </header>

      <div className="page-shell mx-auto mt-10 max-w-5xl md:mt-16">
        <EditorialImage
          src={article.image}
          alt={frontmatter.imageAlt}
          caption={frontmatter.imageCaption}
          aspect="feature"
          priority
          captionAlign="center"
        />
      </div>

      {/* Article Body */}
      <div className="page-shell mx-auto mt-12 max-w-[680px] md:mt-20">
        <ArticleMarkdown content={content} />
      </div>

      {/* Closing Section */}
      <div className="page-shell mx-auto mt-16 max-w-[680px] md:mt-28">
        <div className="border-t border-foreground/10 pt-12 md:pt-16">
          <p className="text-center font-serif text-lg leading-relaxed text-foreground/55 sm:text-xl md:text-2xl">
            좋은 장소와 시간은 오래 남습니다.
          </p>
          <div className="mt-8 text-center sm:mt-10">
            <Link
              href="/journal"
              className="text-xs uppercase tracking-[0.28em] text-foreground/50 transition-colors hover:text-accent"
            >
              Back to Journal
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="page-shell mx-auto mt-20 max-w-6xl md:mt-32">
          <p className="section-label">Related</p>
          <h2 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
            More to read
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
            {relatedArticles.map((related) => (
              <RelatedArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
