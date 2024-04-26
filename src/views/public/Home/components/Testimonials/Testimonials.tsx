import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import { config } from "./Testimonials.config";
import "./testimonial.css";

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
          responsive={config.responsive}
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
