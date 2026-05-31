import ArticleCard from "@/components/ArticleCard";
import PlacesWorthRemembering from "@/components/PlacesWorthRemembering";
import { getArticlesByCategory } from "@/data/articles";
import { curatedPlacesForPlacesPage } from "@/data/curatedPlaces";
import { enrichArticles } from "@/lib/content";

export const metadata = {
  title: "Places",
  description:
    "좋은 장소는 단순히 예쁜 곳이 아니라, 다시 머물고 싶은 곳입니다.",
};

export default function PlacesPage() {
  const curatedPlaces = curatedPlacesForPlacesPage();
  const placesArticles = enrichArticles(getArticlesByCategory("Places"));

  return (
    <div className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pt-14">
      <header className="max-w-2xl border-b border-muted/50 pb-10 md:pb-16">
        <p className="section-label">Places</p>
        <h1 className="mt-5 font-serif text-4xl tracking-[0.02em] text-foreground sm:text-5xl md:text-6xl">
          Places
        </h1>
        <p className="body-calm mt-5 text-foreground/70 sm:mt-6">
          좋은 장소는 단순히 예쁜 곳이 아니라, 다시 머물고 싶은 곳입니다.
        </p>
      </header>

      <div className="py-12 md:py-20">
        <PlacesWorthRemembering places={curatedPlaces} />

        <section className="pt-12 md:pt-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
              Stories About Places
            </h2>
            <p className="body-calm mt-6 text-foreground/70 sm:mt-8">
              장소를 바라보는 기준과 머문 시간에 대한 글들입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14 md:mt-16">
            {placesArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                variant="magazine"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
