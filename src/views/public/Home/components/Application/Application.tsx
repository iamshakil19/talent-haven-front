import Container from "@/components/shared/Container";
import { config } from "./Application.config";

const Application = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-center md:items-center gap-20">
        <div className="flex-1">
          <p className="text-primary mb-2 font-semibold">
            {config.staticText.downloadText}
          </p>
          <p className="text-4xl leading-normal font-bold mb-3 max-w-sm">
            {config.staticText.title}
          </p>
          <p className="text-sm max-w-md text-primary-gray mb-10">
            {config.staticText.subTitle}
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <img className="" src={config.staticText.playStoreImg} alt="" />
            <img className="" src={config.staticText.appleStoreImg} alt="" />
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover flex-1"
          style={{ backgroundImage: `url(/img/home/mobile-app-bg-shape.png)` }}
        >
          <img className="mx-auto" src={config.staticText.appImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Application;
