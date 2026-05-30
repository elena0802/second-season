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
      "교직 생활을 시작했을 때의 기억은 이제 많이 흐려졌다. 처음 맡았던 반의 이름도, 첫 출근 날의 날씨도 선명하게 떠오르지는 않는다. 다만 한 가지는 기억난다. 학생들의 미래를 함께 고민하는 일이 생각보다 훨씬 무겁고, 동시에 의미 있는 일이라는 사실이었다.",
      "35년이라는 시간 동안 수많은 학생들을 만났다. 어떤 학생은 자신의 길을 일찍 찾았고, 어떤 학생은 오랜 시간 방황했다. 누군가는 자신감을 잃었고, 누군가는 예상하지 못한 곳에서 가능성을 발견했다. 교사로서 내가 할 수 있었던 일은 답을 알려주는 것이 아니라, 질문을 함께 붙들고 있는 일이었다.",
      "무엇을 좋아하는지.",
      "어떤 사람이 되고 싶은지.",
      "어떤 삶을 살고 싶은지.",
      "그 질문들은 학생들만의 것이 아니었다. 돌이켜보면 나 역시 같은 질문을 품고 살아왔다.",
      "명예퇴직을 한 뒤 처음에는 하루가 길게 느껴졌다. 오랫동안 익숙했던 일정이 사라지고, 아침의 방향도 달라졌다. 해야 할 일이 없어서가 아니라, 스스로 시간을 만들어야 하는 삶이 처음이었기 때문이다.",
      "그 무렵부터 조금씩 걷기 시작했다.",
      "가까운 공원을 산책하고, 카페에 오래 앉아 책을 읽고, 여행지에서 서두르지 않는 시간을 보내게 되었다. 예전에는 지나치던 풍경들이 눈에 들어오기 시작했다. 창가에 오래 머무는 햇살, 계절마다 조금씩 달라지는 나무의 색, 조용한 식당의 분위기 같은 것들이다.",
      "흥미로운 것은 그런 시간이 결코 비어 있는 시간이 아니었다는 점이다. 오히려 바쁘게 살아갈 때보다 더 많은 것을 발견하게 되었다.",
      "Second Season은 그런 기록에서 시작되었다.",
      "좋은 장소를 기억하고, 오래 남는 시간을 기록하고, 나이가 들수록 더 소중해지는 것들을 남기고 싶었다. 누군가에게 정보를 제공하기 위해서라기보다, 삶을 조금 더 천천히 바라보기 위해서였다.",
      "첫 번째 계절이 성실하게 살아온 시간이었다면, 두 번째 계절은 발견의 시간인지도 모른다.",
      "여전히 배우고 있고, 여전히 궁금한 것이 있으며, 여전히 아름다운 것을 발견할 수 있다는 사실이 생각보다 큰 위로가 된다.",
      "Second Season은 은퇴에 관한 기록이 아니다.",
      "여전히 세상을 향해 호기심을 가지고 살아가는 사람의 기록이다.",
      "그리고 이 저널은 그 두 번째 계절의 첫 페이지다.",
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
      "나이가 들수록 장소를 보는 기준도 조금씩 달라진다.",
      "예전에는 새로운 장소를 좋아했다. 사람들이 많이 찾는 곳, 막 문을 연 곳, 한 번쯤은 가봐야 할 것 같은 곳들에 관심이 있었다. 여행을 가도 더 많은 곳을 보고 싶었고, 주말이 되면 새로운 장소를 찾아 나서는 일이 즐거웠다.",
      "그런데 어느 순간부터 기준이 달라지기 시작했다.",
      "새로운 곳보다 다시 가고 싶은 곳이 중요해졌다.",
      "유명한 곳보다 편안한 곳이 좋아졌다.",
      "사진이 잘 나오는 곳보다 오래 머물 수 있는 곳을 찾게 되었다.",
      "좋은 장소에는 공통점이 있다.",
      "반드시 크거나 화려할 필요는 없다. 특별한 건축물이나 유명한 메뉴가 없어도 된다. 오히려 좋은 장소들은 대체로 조용하다. 처음에는 눈에 띄지 않을 만큼 평범한 경우도 많다.",
      "하지만 그런 장소에는 사람을 편안하게 만드는 무언가가 있다.",
      "창가로 들어오는 햇살일 수도 있고, 적당한 거리감을 유지하는 분위기일 수도 있다. 서두르지 않아도 되는 공기, 오래 앉아 있어도 눈치 보이지 않는 여유일 수도 있다.",
      "좋은 장소를 만나면 시간의 속도가 조금 달라진다.",
      "시계를 자주 보지 않게 되고, 다음 일정이 잠시 잊히기도 한다. 커피 한 잔을 마시는 시간이 길어지고, 평소에는 지나쳤을 생각들이 천천히 떠오른다.",
      "그래서 좋은 장소는 단순히 공간이 아니다.",
      "좋은 장소는 좋은 시간을 만들어준다.",
      "그리고 더 좋은 장소는 사람을 떠오르게 한다.",
      "이곳에는 오래된 친구와 함께 오면 좋겠다는 생각이 들고, 부모님을 모시고 다시 와야겠다는 마음이 생긴다. 혼자 오기 좋았던 장소가 누군가와 함께 오고 싶은 장소가 되는 순간도 있다.",
      "그때 비로소 그 장소는 기억 속에 남는다.",
      "돌이켜보면 내가 좋아하는 장소들은 대부분 그런 곳이었다.",
      "특별해서 기억나는 것이 아니라, 편안해서 기억나는 곳.",
      "한 번의 방문으로 끝나는 것이 아니라, 계절이 바뀌면 다시 생각나는 곳.",
      "그리고 시간이 지나도 여전히 같은 이유로 좋아할 수 있는 곳.",
      "좋은 장소를 찾는 일은 결국 좋은 삶을 찾는 일과 닮아 있는지도 모른다.",
      "무엇이 나를 편안하게 하는지, 무엇이 오래 남는지, 무엇을 소중하게 생각하는지 알게 되기 때문이다.",
      "Second Season에서는 그런 장소들을 기록하려고 한다.",
      "가장 유명한 장소가 아니라, 가장 오래 기억에 남는 장소들.",
      "언젠가 다시 가고 싶은 곳들.",
      "그리고 누군가에게 조용히 추천하고 싶은 장소들.",
      "그것이 내가 좋은 장소를 알아보는 기준이다.",
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
