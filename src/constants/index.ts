export const WINE_API_ENDPOINT = "https://api.sampleapis.com/wines/";
export const BEER_API_ENDPOINT = "https://api.sampleapis.com/beers/";
export const NO_IMAGE_WINE =
  "https://cdn.shopify.com/s/files/1/0532/8509/3525/files/Group_5.png?v=1615453446";
export const MEDIA_QUERY_END_POINT = {
  MOBILE: "640px",
  TABLET: "1280px",
  DESKTOP: "1920px",
  LARGE: "2560px",
};
export const ROUTES = [
  {
    ID: 0,
    PATH: "/beers",
    LABEL: "맥주",
    ORDER: 0,
    SUBS: [
      {
        ID: 0,
        PATH: "/stouts",
        LABEL: "스타우트",
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: "/ale",
        LABEL: "에일",
        ORDER: 1,
      },
    ],
  },
  {
    ID: 1,
    PATH: "/wines",
    LABEL: "와인",
    ORDER: 1,
    SUBS: [
      {
        ID: 0,
        PATH: "/port",
        LABEL: "포트",
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: "/reds",
        LABEL: "레드",
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: "/rose",
        LABEL: "로즈",
        ORDER: 2,
      },
      {
        ID: 3,
        PATH: "/sparkling",
        LABEL: "스파클링",
        ORDER: 3,
      },
      {
        ID: 4,
        PATH: "/whites",
        LABEL: "화이트",
        ORDER: 4,
      },
      {
        ID: 5,
        PATH: "/dessert",
        LABEL: "디져트",
        ORDER: 5,
      },
    ],
  },
];
