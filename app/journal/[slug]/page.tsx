import Link from "next/link";
import { notFound } from "next/navigation";
import EditorialImage from "@/components/EditorialImage";
import RelatedArticleCard from "@/components/RelatedArticleCard";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";

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

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  return (
    <article className="pb-24 pt-10 md:pt-14">
      {/* Article Hero */}
      <header className="mx-auto max-w-4xl px-6 md:px-10">
        <Link
          href="/journal"
          className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
        >
          Journal
        </Link>

        <p className="mt-10 text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
          {article.category}
        </p>

        <h1 className="mt-5 font-serif text-4xl leading-[1.15] tracking-[0.01em] text-foreground md:text-5xl lg:text-[3.25rem]">
          {article.title}
        </h1>

        <p className="mt-6 whitespace-pre-line font-serif text-xl leading-relaxed text-foreground/60 md:text-2xl">
          {article.subtitle}
        </p>

        <p className="mt-8 text-[0.7rem] tracking-[0.12em] text-foreground/45">
          {article.date}
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-5xl px-6 md:mt-16 md:px-10">
        <EditorialImage
          src={article.image}
          alt={article.imageAlt}
          caption={article.imageCaption}
          aspect="feature"
          priority
          captionAlign="center"
        />
      </div>

      {/* Article Body */}
      <div className="mx-auto mt-16 max-w-[680px] px-6 md:mt-20 md:px-8">
        <div className="space-y-10 text-[1.125rem] leading-[1.9] text-foreground/80">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div className="mx-auto mt-20 max-w-[680px] px-6 md:mt-28 md:px-8">
        <div className="border-t border-foreground/10 pt-14 md:pt-16">
          <p className="text-center font-serif text-xl leading-relaxed text-foreground/55 md:text-2xl">
            좋은 장소와 시간은 오래 남습니다.
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/journal"
              className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50 transition-colors hover:text-accent"
            >
              Back to Journal
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl px-6 md:mt-32 md:px-10">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-secondary">
            Related
          </p>
          <h2 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
            More to read
          </h2>

          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {relatedArticles.map((related) => (
              <RelatedArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
