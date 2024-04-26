import { ITestimonial } from "./Testimonials.config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteRight } from "react-icons/fa";
const TestimonialCard = ({ data }: { data: ITestimonial }) => {
  const { name, title, description, designation, img, imgFallbackName } =
    data || {};

  return (
    <div className="bg-background p-10 rounded-md mx-3">
      <div className="relative">
        <FaQuoteRight className="text-secondary-blue absolute right-0 text-4xl -top-5" />
        <p className="text-primary-blue text-lg font-medium">{title}</p>

        <p className="mt-5 text-sm tracking-wider leading-loose">
          {description}
        </p>

        <div className="flex gap-4 items-center mt-10">
          <div>
            <Avatar className="w-16 h-16">
              <AvatarImage src={img} />
              <AvatarFallback>{imgFallbackName}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p>{name}</p>
            <p className="text-xs mt-2 text-primary-gray">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
