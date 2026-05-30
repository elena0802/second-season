export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export const issueLabel = "Issue No. 001";
export const issueSeason = "Early Spring";

export const tagline = "The second season begins with curiosity.";

export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Coffee and afternoon light on a wooden table",
    caption: "오후의 빛 · 커피 · 책상 위의 시간",
  },
  editor: {
    src: "/images/editor.jpg",
    alt: "Hands turning the pages of a book by a window",
    caption: "창가에서 책을 넘기는 오후",
  },
  places: [
    {
      src: "/images/places-01.jpg",
      alt: "Sunlit living room with warm afternoon light",
      caption: "햇살이 머무는 거실, 서울",
    },
    {
      src: "/images/places-02.jpg",
      alt: "Warmly lit table set for a quiet meal",
      caption: "조용한 식사를 위한 자리",
    },
    {
      src: "/images/places-03.jpg",
      alt: "Pouring tea in soft morning light",
      caption: "아침 차 한 잔의 시간",
    },
  ],
};

export const articles: Article[] = [
  {
    slug: "after-35-years-teaching",
    title: "35년 교직 생활 이후",
    excerpt:
      "35년간 교실에서 보낸 시간 뒤, 처음으로 자신만의 아침을 갖게 되었습니다.",
    category: "Essay",
    date: "March 2026",
    featured: true,
    image: "/images/after-teaching.jpg",
  },
  {
    slug: "how-to-know-a-good-place",
    title: "좋은 장소를 알아보는 기준",
    excerpt:
      "인스타그램에 잘 나오는 곳과, 다시 가고 싶은 곳은 같은 곳이 아닙니다.",
    category: "Places",
    date: "March 2026",
    image: "/images/good-place.jpg",
  },
  {
    slug: "cafe-where-sunlight-lingers",
    title: "햇살이 오래 머무는 카페",
    excerpt:
      "서울 골목에서 찾은, 햇살이 오후 내내 머무는 작은 카페.",
    category: "Places",
    date: "March 2026",
    image: "/images/sunlit-cafe.jpg",
  },
  {
    slug: "two-days-in-gangneung",
    title: "강릉에서 보낸 이틀",
    excerpt:
      "관광지를 채우지 않고, 두 골목과 한 해변만 기억하기로 했습니다.",
    category: "Journeys",
    date: "March 2026",
    image: "/images/gangneung.jpg",
  },
  {
    slug: "things-that-get-better-with-age",
    title: "나이가 들수록 좋아지는 것들",
    excerpt:
      "빠르게 변하는 것보다, 시간이 지날수록 깊어지는 것들.",
    category: "Essay",
    date: "March 2026",
    image: "/images/with-age.jpg",
  },
  {
    slug: "why-mornings-became-better",
    title: "아침이 좋아진 이유",
    excerpt:
      "젊을 때는 밤이 좋았지만, 두 번째 계절에는 아침의 고요함이 더 소중해졌다.",
    category: "Essay",
    date: "2026-06-01",
    image: "/images/places-03.jpg",
  },
  {
    slug: "small-restaurant-worth-returning-to",
    title: "다시 찾게 되는 작은 식당",
    excerpt:
      "좋은 식당은 맛으로 기억되기도 하지만, 결국 다시 가고 싶은 마음으로 남는다.",
    category: "Places",
    date: "2026-06-08",
    image: "/images/places-02.jpg",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((article) => article.featured) ?? articles[0];
}

export function getSecondaryArticles(): Article[] {
  return articles.filter((article) => !article.featured);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const currentIndex = articles.findIndex((article) => article.slug === slug);

  if (currentIndex === -1) {
    return articles.slice(0, count);
  }

  const related: Article[] = [];

  for (let i = 1; i <= count; i++) {
    related.push(articles[(currentIndex + i) % articles.length]);
  }

  return related;
}
