const companyLogoData = [
  {
    id: "1",
    img: "img/home/c-logo-1.png",
  },
  {
    id: "2",
    img: "img/home/c-logo-2.png",
  },
  {
    id: "3",
    img: "img/home/c-logo-3.png",
  },
  {
    id: "4",
    img: "img/home/c-logo-4.png",
  },
  {
    id: "5",
    img: "img/home/c-logo-2.png",
  },
  {
    id: "6",
    img: "img/home/c-logo-5.png",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export const config = {
  companyLogoData,
  responsive,
};
