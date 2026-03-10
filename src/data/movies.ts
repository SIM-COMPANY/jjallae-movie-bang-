export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  year: string;
  director: string;
  genre: string;
  color: string;
  rating: number;
  posterUrl: string;
  sceneUrl: string;
  quote?: string;
  essayTitle: string;
  essayContent: string;
  tags: string[];
  category: string;
  ratingSticker: string;
  date: string;
  ownerNote?: string;
}

export const movies: Movie[] = [
  {
    id: "zone-of-interest",
    title: "존 오브 인터레스트",
    originalTitle: "The Zone of Interest",
    year: "2023",
    director: "Jonathan Glazer",
    genre: "Drama",
    color: "#1c1917",
    rating: 5,
    posterUrl: "https://image.tmdb.org/t/p/w500/qqXQERsbWGrUldJjr0fDHuWjhPG.jpg",
    sceneUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    quote: "Evil is ordinary. That's the horror.",
    essayTitle: "귓가에 스쳐가는 잡음: 악의 평범성에 관하여",
    essayContent: `
      <p>악의 평범성을 보여주기 위해<br>감독이 감내해야 했을 고통은 어땠을지,<br>쉬이 가늠할 수도 없고,<br>함부로 가늠해서도 안 될 것 같다.<br>찍으면서 얼마나 우울하고 홧병 끓어올랐을까...</p>
      <p>시내버스가 내뿜는 시끄러운 경적 소리에<br>그 누구도 신경쓰지 않는 것처럼,<br>때에 따라서는 수많은 생명의 절규조차도<br>그저 귓가에 스쳐가는 잡음에 지나지 않는다.</p>
      <p>영화는 그 잔혹한 사운드를<br>마치 배경음처럼 잔잔하게 깔아둔다.</p>
      <p>그게 얼마나 고통스럽게 들리는 지는<br>그저 관객의 귀에 맡길 뿐인데,<br>극중 인물들의 평온한 전원생활을 보다 보면,<br>나도 모르게 그 사운드에 무뎌진다.</p>
      <p>그런 나의 무감각함을 깨닫게 되는 순간,<br>이 영화의 차갑고 잔인한 면모가 드러난다.</p>
      <p>중간중간 열화상 카메라로<br>어느 소녀의 행적을 촬영하는데,<br>비주얼만 놓고 보면 상당히 기괴하지만,<br>실은 극 중에서 몇 안 되는,<br>휴머니즘 가득한 장면이라는 게 아이러니.<br>그리고 그 따뜻함이 의도치 않게 초래하는<br>비극을 목도할 때, 가슴에서 솟구치는 안타까움.</p>
      <p>4~5분 가량 되는 후반부 '청소' 시퀀스.<br>보는 사람마다 다른 해석을 할 것 같은데,<br>대상을 바라보는 시대와 시선은 다르지만,<br>결국은 모두가 '직업적으로만' 접근할 뿐이다.<br>그게 나라고 다를까 생각하니... 좀 힘들었다.</p>
      <p>그리고 엔딩 크레딧에 이르러서야<br>증폭되는 사운드는... 정말 괴롭다.</p>
      <p>남의 나라, 다른 시대의 얘기 같지만,<br>결국 어떤 형태로든, 나 자신도 비슷한 과오를<br>저지르고 있진 않은 지 고민하게 하는 영화.<br>일단 상반기 저무는 현 시점 기준으로,<br>올해 최고의 영화.</p>
    `,
    tags: ["홀로코스트", "악의평범성", "사운드"],
    category: "영문학도의 시선",
    ratingSticker: "사운드주의",
    date: "2024. 06. 15",
    ownerNote: "태준's Pick",
  },
  {
    id: "chinese-odyssey",
    title: "서유쌍기",
    originalTitle: "A Chinese Odyssey",
    year: "1995",
    director: "Jeff Lau (유진위)",
    genre: "Comedy",
    color: "#713f12",
    rating: 5,
    posterUrl: "https://image.tmdb.org/t/p/w500/2Jfl1VI3fLr3VmG8bdtsLUH2cAn.jpg",
    sceneUrl: "https://images.unsplash.com/photo-1547480053-7d174f67b557?q=80&w=2070&auto=format&fit=crop",
    quote: "Once upon a time, I really loved someone.",
    essayTitle: "뽀이뽀로미: 허름한 웃음 아래 숨겨진 깊이",
    essayContent: `
      <p><em>비주얼 : B &nbsp;|&nbsp; 스토리 : A &nbsp;|&nbsp; 연기 : S &nbsp;|&nbsp; 페이소스 : ∞</em></p>
      <p>제작 시기를 감안해도 뒤떨어지는 조악한 분장과 엉성한 특수효과.<br>하지만 시간이 흐를수록 짙어지는 이 듀올로지 특유의 달콤씁쓸한 감정.</p>
      <p>가학적인 슬랩스틱 코미디를 보며, 처음엔 허름한 웃음으로 시작하지만,<br>엔딩곡 &lt;일생소애&gt;를 들을 때면 자연스레 뜨거운 눈물이 주룩 흐른다.<br>볼품없는 얄팍한 외피 아래 숨겨진, 깊이를 알 수 없는 사유가 놀랍다.<br>인생의 연차가 한 해씩 쌓이면서 이 영화가 주는 울림도 더욱 커진다.</p>
      <p>주성치-오맹달 콤비플레이는 절정에 달했고,<br>당대 명작들의 패러디로 가득한 이 작품에서 원본 레퍼런스를 찾아보는 재미도 쏠쏠하다.</p>
      <p>자타공인 최고의 볼거리 중 하나는 자하선사 역을 맡은 주인의 연기와 미모.<br>그 배역만큼은 주인 밖엔 못할 것 같다.<br>그녀의 표정 하나하나가 서사를 만든다.<br>마치 불길에 뛰어드는 불나방처럼,<br>이뤄질 수 없는 사랑임을 알면서도 걷잡을 수 없는 감정을 떨치지 못하는 그녀의 미소엔<br>순진무구함과 함께 쓸쓸함이 묻어 있다.<br>결말부에서 주인공을 바라보는 그 아련한 눈빛에는 항상 가슴이 시리다.</p>
    `,
    tags: ["주성치", "홍콩영화", "사랑"],
    category: "사랑이 서툴렀던 시절",
    ratingSticker: "눈물주의",
    date: "2024. 03. 22",
    ownerNote: "강력 추천",
  },
  {
    id: "peppermint-candy",
    title: "박하사탕",
    originalTitle: "Peppermint Candy",
    year: "2000",
    director: "이창동",
    genre: "Drama",
    color: "#0f2640",
    rating: 5,
    posterUrl: "https://image.tmdb.org/t/p/w500/zxCr6MBF7BPr4r8RiYyuNps4DWN.jpg",
    sceneUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    quote: "I'm going back.",
    essayTitle: "인생은 순수함을 잃어가는 여정",
    essayContent: `
      <p>인생은 순수함을 잃어가는 여정. 그 여정에서 쌓여 가는 고통을 더 이상 이겨내지 못한 나머지, 원점으로 돌아가려는 한 남자. 과거로 떠나는 그의 시간여행 속에서 하나씩 드러나는 슬픈 현대사의 단면들.</p>
      <p>새해 첫날 1월 1일에 개봉하며 한국영화의 새로운 시작을 알린 걸작. 언제 봐도 세련된 영화다. 오히려 세월이 흐르면서 더욱더 뜨겁고 차갑게 다가오는 영화다.</p>
      <p>이름도 몰랐던 배우 설경구의 전율적인 연기가 영화를 지배한다. 그야말로 혜성처럼 등장했다는 표현 외엔 설명이 어려운 스타의 탄생. 왠지 남성적인 느낌이 강한 영화지만, 오히려 여배우 분들이 눈에 띈다. 주연인 문소리는 말할 것도 없고, 김여진, 서정 등 훌륭한 조연이 영화를 빛낸다.</p>
      <p>단역으로 지나가는 수준이지만, 고서희 배우의 연기가 인상적이다. 해변가에서 설경구를 하염없이 기다리는 그 뒷모습이 이따금씩 머리에서 맴돈다.</p>
    `,
    tags: ["한국영화", "이창동", "현대사"],
    category: "술 한잔 생각나는 밤",
    ratingSticker: "혼자금지",
    date: "2024. 01. 08",
    ownerNote: "술 한 잔 필수",
  },
  {
    id: "sixth-sense",
    title: "식스 센스",
    originalTitle: "The Sixth Sense",
    year: "1999",
    director: "M. Night Shyamalan",
    genre: "Thriller",
    color: "#1f2937",
    rating: 5,
    posterUrl: "https://image.tmdb.org/t/p/w500/zmPBZos4lzZi95UayzjATYyLWHT.jpg",
    sceneUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
    quote: "I see dead people.",
    essayTitle: "소통: 공포와 반전 뒤에 숨겨진 진짜 이야기",
    essayContent: `
      <p>대개의 감독들은 작품을 거듭하며 점진적으로 포텐셜을 만개시키지만, 입봉작에 모든 역량을 쏟아붓는 이도 있다. 대표주자로는 M. 나이트 샤말란이 있다. 그의 남은 커리어 동안 &lt;식스 센스&gt;를 능가할 작품을 기대하기란 과욕에 가깝다.</p>
      <p>느릿하고 긴 호흡의 연출임에도 불구하고 지루함을 느낄 새 없는 흥미로운 이야기, 서구 영화에 담긴 독특한 동양적 한의 정서, 당대를 대표했던 충격의 반전 엔딩이 어우러져 기적과도 같은 걸작을 탄생시켰다.</p>
      <p>사실 공포라는 장르와 반전이라는 장치는 조미료일 뿐, 영화의 원재료는 아니다. 이 영화를 관통하는 핵심 주제는 '소통'이다. 등장인물들은 모두 소통의 단절로 인한 상처를 가슴 한 켠에 하나씩 안고 살아간다.</p>
      <p>소년 콜은 말콤과의 여정에서 마음을 열고 상대의 목소리를 듣기 시작하고, 오랜 시간 저주라고만 느꼈던 자신의 능력을 있는 그대로 받아들이며 고통에서 벗어난다. 그리고 그의 변화는 궁극적으로 주변을 변화시키는 계기가 된다.</p>
      <p>가끔씩 울고 싶은 때가 있다면, 유튜브에서 '식스센스 명장면'을 검색해 나오는 6분 44초 영상을 재생한다. 다 볼 때쯤이면 어김없이 눈물이 뚝뚝 흘러내린다. 이 모자 간의 대화 장면 하나 때문에 이 장황한 리뷰글을 쓰고 있는 것이다.</p>
    `,
    tags: ["반전", "소통", "샤말란"],
    category: "영문학도의 시선",
    ratingSticker: "스포금지",
    date: "2023. 11. 30",
    ownerNote: "끝까지 믿어봐",
  },
  {
    id: "blue-warmest-color",
    title: "가장 따뜻한 색, 블루",
    originalTitle: "Blue Is the Warmest Color",
    year: "2013",
    director: "Abdellatif Kechiche",
    genre: "Drama",
    color: "#1e1b4b",
    rating: 4,
    posterUrl: "https://image.tmdb.org/t/p/w500/bRqQEPje0ALDUw1AhUT7FP99aap.jpg",
    sceneUrl: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=2070&auto=format&fit=crop",
    quote: "Blue is the warmest color.",
    essayTitle: "볼 때는 뜨거운데, 보고 나면 추운 느낌",
    essayContent: `
      <p>이미 폐관한 지 오래인 씨네코드 선재에서 봤던 첫 번째 영화. 3시간 분량의 필름에 사랑의 흥망성쇠를 강렬하지만 섬세한 시선으로 담았다. 볼 때는 뜨거운데, 보고 나면 추운 느낌이 든다.</p>
      <p>다소 과하다 생각이 들 만큼 영화 속에서 먹방이 자주 나오는데, 가장 일상적이고 친근한 만남의 공간인 '식탁'에서 일어나는 상황을 보면 두 연인은 서로의 간격을 조금씩 확인하게 된다. 언제나 행복할 것만 같은 두 사람이지만 갈등의 씨앗은 그들이 함께 하는 시공간 속에 그들 몰래 자리 잡고 있었다.</p>
      <p>의도된 건지 아닌지는 모르지만 왠지 모르게 디테일이 빛나는 장면이 있다. 실연의 상처를 입은 아델이 눈물 콧물이 범벅된 얼굴을 손으로 훔친 뒤 그 찐득찐득한 두 손을 맞대고 비비는 씬. 그 서러운 눈물에 가슴이 찡하면서도 동시에 통통한 손을 문지르는 모습이 귀엽다.</p>
      <p>파란 염색 머리를 버리고 본연의 금발을 되찾은 엠마가 실연의 상처를 극복한 반면, 과거를 지우지 못한 채 파란 원피스를 입고 쓸쓸히 돌아서는 아델의 뒷모습을 보면 — 제목과는 달리 파란색은 여전히 차갑게 느껴진다.</p>
    `,
    tags: ["사랑", "성장", "프랑스영화"],
    category: "사랑이 서툴렀던 시절",
    ratingSticker: "심장주의",
    date: "2023. 09. 14",
    ownerNote: "보고 나면 추움",
  },
];
