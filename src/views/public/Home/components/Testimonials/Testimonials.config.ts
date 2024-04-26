export interface ITestimonial {
  id: string;
  title: string;
  description: string;
  img: string;
  imgFallbackName: string;
  name: string;
  designation: string;
}

const testimonialData: ITestimonial[] = [
  {
    id: "1",
    title: "Good Theme",
    description:
      "Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite… The Mitech team works really hard to ensure high level of quality.",
    name: "Nicole Wells",
    designation: "Web Developer",
    img: "img/home/testi-img-1.png",
    imgFallbackName: "NW",
  },
  {
    id: "2",
    title: "Great Quality!",
    description:
      "Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite… The Mitech team works really hard to ensure high level of quality.",
    name: "Gabriel Nolan",
    designation: "Consultant",
    img: "img/home/testi-img-2.png",
    imgFallbackName: "GN",
  },
  {
    id: "3",
    title: "Awesome Design",
    description:
      "Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite… The Mitech team works really hard to ensure high level of quality.",
    name: "Ashley Jenkins",
    designation: "Designer",
    img: "img/home/testi-img-3.png",
    imgFallbackName: "AJ",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const staticText = {
  title: "Testimonials From Our Customers",
  subTitle: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor",
};

export const config = {
  testimonialData,
  staticText,
  responsive,
};
