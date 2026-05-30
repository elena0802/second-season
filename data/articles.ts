export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  issue: string;
  season: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  imageCaption: string;
  content: string[];
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
    subtitle:
      "학생들의 미래를 함께 고민하던 사람이\n이제는 자신의 시간을 기록하기 시작하다.",
    excerpt:
      "35년간 교실에서 보낸 시간 뒤, 처음으로 자신만의 아침을 갖게 되었습니다.",
    category: "Essay",
    issue: issueLabel,
    season: issueSeason,
    date: "March 2026",
    readTime: "8 min",
    featured: true,
    image: "/images/after-teaching.jpg",
    imageAlt: "Open book and reading glasses in warm morning light",
    imageCaption: "은퇴 후 첫 아침, 책상 위의 빛",
    content: [
      "35년 동안 매일 아침 교실 문을 열었습니다. 학생들의 질문, 진로 상담, 졸업식의 눈물—그 모든 것이 제 하루의 중심이었습니다.",
      "은퇴 후 처음 맞이한 아침은 조용했습니다. 알람 대신 창문 너머 빛으로 눈을 뜨고, 서두르지 않고 차 한 잔을 내리는 시간. 처음에는 낯설었지만, 곧 이것이 제 두 번째 계절의 시작임을 알게 되었습니다.",
      "학생들의 미래를 함께 고민하던 사람이, 이제는 자신의 시간을 기록하기 시작했습니다. 좋은 장소, 조용한 여행, 오래 기억하고 싶은 순간들—그것들을 글로 남기며, 여전히 아름다운 것을 발견하고 있습니다.",
      "Second Season은 그 기록의 시작입니다.",
    ],
  },
  {
    slug: "how-to-know-a-good-place",
    title: "좋은 장소를 알아보는 기준",
    subtitle: "예쁜 곳과 좋은 곳은 다릅니다",
    excerpt:
      "인스타그램에 잘 나오는 곳과, 다시 가고 싶은 곳은 같은 곳이 아닙니다.",
    category: "Places",
    issue: issueLabel,
    season: issueSeason,
    date: "March 2026",
    readTime: "6 min",
    image: "/images/good-place.jpg",
    imageAlt: "Quiet city street at dusk with warm streetlights",
    imageCaption: "소음 없는 거리, 다시 걷고 싶은 저녁",
    content: [
      "좋은 장소를 알아보는 기준은 생각보다 단순합니다. 소음이 적고, 시간이 느리게 흐르고, 누군가와 함께 있어도 편안한 곳.",
      "35년간 수많은 학교와 도시를 오가며, 저는 좋은 공간이 사람의 마음을 어떻게 바꾸는지 직접 보았습니다. 채광 하나, 의자 높이 하나가 집중과 대화를 바꿉니다.",
      "이제는 그 감각을 여행과 일상에 적용합니다. 화려한 인테리어보다 빛의 각도, 붐비는 인기보다 대화가 가능한 거리—이런 것들이 좋은 장소를 만듭니다.",
    ],
  },
  {
    slug: "cafe-where-sunlight-lingers",
    title: "햇살이 오래 머무는 카페",
    subtitle: "오후 세 시, 창가 자리",
    excerpt:
      "서울 골목에서 찾은, 햇살이 오후 내내 머무는 작은 카페.",
    category: "Places",
    issue: issueLabel,
    season: issueSeason,
    date: "March 2026",
    readTime: "5 min",
    image: "/images/sunlit-cafe.jpg",
    imageAlt: "Small cafe interior with plants and window light",
    imageCaption: "서울 골목, 오후 세 시의 창가",
    content: [
      "이 카페를 처음 발견한 것은 우연히 지나가다가였습니다. 유리창 너머로 오후 햇살이 테이블 위에 길게 놓여 있었습니다.",
      "커피는 무난했고, 디저트도 특별하지 않았습니다. 하지만 창가 자리에 앉아 책을 펼치면, 시간이 눈에 보일 정도로 천천히 흘렀습니다.",
      "좋은 카페는 맛만으로 기억되지 않습니다. 그곳에서 보낸 오후, 햇살의 각도, 조용히 넘긴 페이지—그것이 함께 기억됩니다.",
    ],
  },
  {
    slug: "two-days-in-gangneung",
    title: "강릉에서 보낸 이틀",
    subtitle: "바다와 커피, 그리고 느린 걸음",
    excerpt:
      "관광지를 채우지 않고, 두 골목과 한 해변만 기억하기로 했습니다.",
    category: "Journeys",
    issue: issueLabel,
    season: issueSeason,
    date: "March 2026",
    readTime: "7 min",
    image: "/images/gangneung.jpg",
    imageAlt: "Calm ocean shoreline under soft morning light",
    imageCaption: "강릉, 이른 아침의 해변",
    content: [
      "강릉에 이틀을 보내며, 처음으로 여행 일정표를 만들지 않았습니다. 아침에는 해변을 걷고, 오후에는 커피 한 잔과 책 한 권.",
      "안목해변의 파도 소리, 경포대 근처 골목의 커피 향—두 가지만으로도 이틀은 충분했습니다.",
      "젊을 때는 많이 봐야 한다고 생각했습니다. 지금은 깊이 기억하는 것이 더 중요하다는 것을 압니다.",
    ],
  },
  {
    slug: "things-that-get-better-with-age",
    title: "나이가 들수록 좋아지는 것들",
    subtitle: "서두르지 않아도 되는 것들",
    excerpt:
      "빠르게 변하는 것보다, 시간이 지날수록 깊어지는 것들.",
    category: "Essay",
    issue: issueLabel,
    season: issueSeason,
    date: "March 2026",
    readTime: "6 min",
    image: "/images/with-age.jpg",
    imageAlt: "Stack of well-loved books on a wooden shelf",
    imageCaption: "오래 두고 싶은 책들",
    content: [
      "나이가 들수록 좋아지는 것들이 있습니다. 아침의 고요함, 좋은 책을 다시 읽는 여유, 오래 알던 사람과의 대화.",
      "35년간 같은 직업을 하며, 매일 비슷해 보이는 하루 속에서도 변하지 않는 것들을 지켜본 경험이 있습니다. 그것이 지금의 저를 만듭니다.",
      "두 번째 계절에는 새로운 것보다 깊어지는 것에 눈길이 갑니다. 좋은 장소, 오래 두고 싶은 책, 천천히 쌓이는 기억—그것들이 요즘의 기쁨입니다.",
    ],
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
