import Container from "@/components/shared/Container";
import { config } from "./Recruit.config";
import { Button } from "@/components/ui/button";

const Recruit = () => {
  return (
    <Container className="bg-secondary-blue rounded-xl flex justify-between items-center">
      <div className="p-5">
        <p className="text-3xl font-semibold mb-5">{config.staticText.title}</p>
        <p className="text-primary-gray text-sm max-w-md mb-5 leading-loose">
          {config.staticText.subTitle}
        </p>

        <Button className="h-12 text-sm px-5">
          {config.staticText.btnText}
        </Button>
      </div>
      <div>
        <img src={config.staticText.img} alt="" />
      </div>
    </Container>
  );
};

export default Recruit;
