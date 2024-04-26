import Container from "@/components/shared/Container";
import { config } from "./JobOpportunity.config";
import { IoCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const JobOpportunity = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 border-t">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 relative">
          <div className="flex-1 flex justify-end">
            <img
              className="w-full max-w-xl"
              src={config.staticText.heroImg}
              alt=""
            />
          </div>
          <div className="flex-1">
            <p className="text-4xl max-w-lg font-semibold leading-normal">
              {config.staticText.title}
            </p>
            <p className="max-w-md mt-10 leading-relaxed">
              {config.staticText.subTitle}
            </p>

            <div className="mt-10">
              {config.staticText.feature?.map((item, index) => (
                <p key={index} className="flex items-center gap-2 mb-3">
                  <IoCheckmark className="text-2xl text-primary-green" /> {item}
                </p>
              ))}
            </div>

            <Button
              onClick={() => navigate("/login")}
              className="text-sm px-7 h-11 mt-10"
            >
              {config.staticText.btnText}
            </Button>
          </div>

          <div className="hidden lg:block p-6 rounded-md border absolute bg-background shadow-sm -bottom-16 left-[50%] -translate-x-2/4">
            <div className="bg-primary-blue h-14 w-14 rounded-full absolute -top-5 -left-5 flex justify-center items-center">
              <IoCheckmark className="text-4xl text-background" />
            </div>
            <p className="text-center mb-3">{config.staticText.employers}</p>
            <img src={config.staticText.companyLogo} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 lg:mt-40 gap-10">
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">
              {config.staticText.activeUser}
            </p>
            <p>{config.staticText.activeUserSub}</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">
              {config.staticText.jobPosition}
            </p>
            <p>{config.staticText.jobPositionSub}</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">
              {config.staticText.storiesShare}
            </p>
            <p>{config.staticText.storiesShareSub}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobOpportunity;
