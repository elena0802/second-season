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
      "35년 동안 매일 아침 교실 문을 열었습니다. 복도의 소리, 칠판의 분필 먼지, 학생들이 들어오는 발걸음—그것이 하루의 시작이었습니다.",
      "진로 상담을 할 때면, 저는 답을 주기보다 질문을 함께 세우곤 했습니다. 어떤 아이는 눈을 반짝이며 나갔고, 어떤 아이는 고개를 숙인 채 나갔습니다. 그 모든 순간이 제 시간의 대부분을 차지했습니다.",
      "은퇴 후 첫 아침, 알람 소리 대신 창문 너머 빛으로 눈을 떴습니다. 처음에는 손이 어디에 둬야 할지 몰랐습니다. 책상은 그대로였지만, 그 앞에 앉는 사람이 달라져 있었습니다.",
      "차를 내리는 데 평소보다 오래 걸렸습니다. 물이 끓는 소리, 찻잔에 스며드는 온기—작은 것들이 유난히 또렷하게 느껴졌습니다. 서두를 이유가 없다는 것이, 생각보다 낯설었습니다.",
      "학생들의 미래를 함께 고민하던 사람이, 이제는 자신의 하루를 기록하기 시작했습니다. 좋은 장소, 조용한 길, 오래 두고 싶은 순간들. 그것들을 글로 남기는 일은, 가르침과 닮아 있습니다. 다만 청중이 없을 뿐입니다.",
      "Second Season은 그 기록의 시작입니다. 화려하지 않아도 괜찮다고, 스스로에게 말해 주고 싶었습니다.",
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
      "좋은 장소를 알아보는 일은, 생각보다 조용한 일입니다. 소리가 낮고, 시간이 느리게 흐르고, 옆 사람과의 거리가 자연스러운 곳.",
      "35년간 여러 학교를 오가며, 저는 공간이 사람의 마음을 어떻게 바꾸는지 많이 보았습니다. 창문의 높이, 의자 사이의 간격, 복도의 길이—눈에 띄지 않는 것들이 하루를 만듭니다.",
      "예쁜 곳과 좋은 곳은 같은 곳이 아닐 때가 많습니다. 사진 속에서는 빛나지만, 실제로 앉아 있으면 조금 피곤해지는 곳도 있습니다. 반대로, 처음에는 평범해 보였던 골목이 두 번째 방문에서 익숙하게 느껴질 때도 있습니다.",
      "저는 이제 인테리어를 먼저 보지 않습니다. 빛이 언제, 어디에 머무는지를 먼저 봅니다. 오후 세 시의 창가, 저녁 일곱 시의 테이블—같은 공간도 시간에 따라 다른 얼굴을 합니다.",
      "좋은 장소는 기억에 남습니다. 맛, 풍경, 대화 중 하나만이 아니라, 그날의 공기까지 함께.",
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
      "이 카페를 처음 발견한 것은, 다른 데를 찾다가 우연히 지나가던 중이었습니다. 유리창 너머로 오후 햇살이 테이블 위에 길게 놓여 있었습니다.",
      "안으로 들어서자, 소음이 한 겹 줄어드는 느낌이었습니다. 바깥의 발걸음은 들리지만, 그것이 귀찮지 않았습니다.",
      "커피는 무난했습니다. 디저트도 특별하지 않았습니다. 그런데 창가 자리에 앉아 책을 펼치면, 페이지를 넘기는 속도가 저절로 느려졌습니다.",
      "두 번째 방문에서도, 세 번째 방문에서도, 햇살은 비슷한 각도로 들어왔습니다. 같은 자리, 같은 시간—그것이 이 카페를 좋아하는 이유였습니다.",
      "좋은 카페는 맛만으로 기억되지 않습니다. 그곳에서 보낸 오후, 햇살의 길이, 조용히 넘긴 페이지. 그것들이 함께 남습니다.",
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
      "강릉에 이틀을 보내며, 처음으로 여행 일정표를 만들지 않았습니다. 아침에는 해변을 걷고, 오후에는 커피 한 잔과 책 한 권—그것으로 하루가 채워졌습니다.",
      "안목해변의 파도 소리는 크지 않았습니다. 그저 반복되었습니다. 그 반복이 마음을 조용히 내려놓게 했습니다.",
      "경포대 근처 골목에서 커피 향을 맡았습니다. 유명한 곳은 아니었습니다. 문을 열고 들어갔을 때, 바깥의 바람보다 안쪽의 공기가 조금 더 따뜻했습니다.",
      "관광지를 모두 보지 않았습니다. 두 골목과 한 해변만 기억하기로 했습니다. 젊을 때는 많이 봐야 한다고 믿었습니다. 지금은, 깊이 남는 것이 더 중요하다고 느낍니다.",
      "이틀 뒤 서울로 돌아왔을 때, 가방은 가벼웠습니다. 기억은 그렇지 않았습니다.",
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
      "나이가 들수록 좋아지는 것들이 있습니다. 아침의 고요함. 좋은 책을 다시 읽을 수 있는 여유. 오래 알던 사람과 나누는, 짧지 않은 침묵.",
      "35년간 같은 교실에서, 비슷해 보이는 하루를 보냈습니다. 그 안에서도 변하지 않는 것들이 있었습니다. 아이들의 질문, 봄마다 오는 졸업식, 겨울마다 무거워지는 코트.",
      "젊을 때는 새로운 것에 끌렸습니다. 지금은, 깊어지는 것에 눈길이 갑니다. 한 번 읽은 책을 다시 펼칠 때, 처음과 다른 문장이 보일 때가 있습니다.",
      "좋은 장소도 그렇습니다. 처음 갔을 때와 두 번째 갔을 때, 다른 기분이 드는 곳. 그 차이를 기록하는 일이, 요즘의 저를 채웁니다.",
      "서두르지 않아도 되는 것들. 그것들이 조용히 쌓이고 있습니다.",
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
