import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import { config } from "./Testimonials.config";
import "./testimonial.css";

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

const Testimonials = () => {
  return (
    <div className="py-20 bg-[#F0F5F7]">
      <p className="text-center text-3xl font-semibold">
        {config.staticText.title}
      </p>
      <p className="text-center text-sm mt-5">{config.staticText.subTitle}</p>

      <div className="mt-20">
        <Carousel
          className=" z-20 pb-14"
          responsive={responsive}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          swipeable={true}
          showDots={true}
        >
          {config.testimonialData?.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
