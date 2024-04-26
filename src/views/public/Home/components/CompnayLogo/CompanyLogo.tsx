import Container from "@/components/shared/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { config } from "./CompanyLogo.config";
import CompanyLogoCard from "./CompanyLogoCard";

const CompanyLogo = () => {
  return (
    <Container>
      <div className="my-16">
        <Carousel
          responsive={config.responsive}
          draggable={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          arrows={false}
          swipeable={true}
        >
          {config.companyLogoData?.map((item) => (
            <CompanyLogoCard key={item.id} data={item} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default CompanyLogo;
