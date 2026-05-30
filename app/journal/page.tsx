import ArticleCard from "@/components/ArticleCard";
import { getArticlesBySlugs, journalIssues } from "@/data/articles";
import { enrichArticles } from "@/lib/content";

export const metadata = {
  title: "Journal",
};

export default function JournalPage() {
  return (
    <div className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pt-14">
      <header className="max-w-2xl border-b border-muted/50 pb-10 md:pb-16">
        <p className="section-label">Journal</p>
        <h1 className="mt-5 font-serif text-4xl tracking-[0.02em] text-foreground sm:text-5xl md:text-6xl">
          Journal
        </h1>
        <p className="body-calm mt-5 text-foreground/70 sm:mt-6">
          장소, 여행, 그리고 두 번째 계절의 일상을 기록합니다.
        </p>
      </header>

      {journalIssues.map((issue, index) => {
        const issueArticles = enrichArticles(getArticlesBySlugs(issue.slugs));

        return (
          <section
            key={issue.label}
            className={
              index === 0
                ? "py-12 md:py-20"
                : "border-t border-muted/50 py-12 md:py-20"
            }
          >
            <div className="max-w-2xl">
              <p className="section-label">
                {issue.label} · {issue.title}
              </p>
              <p className="body-calm mt-5 text-foreground/70">
                {issue.description}
              </p>
            </div>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:mt-14 lg:grid-cols-3 lg:gap-14">
              {issueArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  variant="magazine"
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
