import Link from "next/link";
import { notFound } from "next/navigation";
import EditorialImage from "@/components/EditorialImage";
import { articles, getArticleBySlug } from "@/data/articles";

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

  const currentIndex = articles.findIndex((item) => item.slug === slug);
  const nextArticle = articles[currentIndex + 1];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <header className="border-b border-muted/70 pb-12 md:pb-16">
        <Link
          href="/journal"
          className="text-xs uppercase tracking-[0.25em] text-secondary transition-colors hover:text-accent"
        >
          Back to journal
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-secondary">
          {article.issue} · {article.category} · {article.readTime}
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[0.02em] text-foreground md:text-6xl">
          {article.title}
        </h1>

        <p className="mt-4 whitespace-pre-line font-serif text-xl leading-relaxed text-foreground/65 md:text-2xl">
          {article.subtitle}
        </p>

        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-foreground/50">
          {article.season} · {article.date}
        </p>
      </header>

      <EditorialImage
        src={article.image}
        alt={article.imageAlt}
        caption={article.imageCaption}
        aspect="feature"
        className="my-12 md:my-16"
        captionAlign="center"
      />

      <div className="space-y-8 text-lg leading-[1.85] text-foreground/80">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {nextArticle && (
        <footer className="mt-20 border-t border-muted/70 pt-12">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary">
            Continue reading
          </p>
          <Link
            href={`/journal/${nextArticle.slug}`}
            className="group mt-4 block"
          >
            <h2 className="font-serif text-3xl text-foreground transition-colors group-hover:text-accent">
              {nextArticle.title}
            </h2>
            <p className="mt-2 text-sm text-foreground/65">
              {nextArticle.subtitle}
            </p>
          </Link>
        </footer>
      )}
    </article>
  );
}
