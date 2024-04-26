import Container from "@/components/shared/Container";
import {
  IPopularJobCategory,
  config,
} from "../PopularCategories/PopularCategories.config";
import { Card, CardContent } from "@/components/ui/card";
// import { config } from "./FeaturedJobs.config";

const FeaturedJobs = () => {
  return (
    <Container className="py-20">
      <p className="text-center text-3xl font-semibold">Featured Jobs</p>
      <p className="text-center text-sm mt-5">
        Know your worth and find the job that qualify your life
      </p>

      <div className="mt-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {config.PopularJobCategories?.map((item: IPopularJobCategory) => (
          <div className="group cursor-pointer" key={item.id}>
            <Card className=" group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-5 flex items-center gap-5">
                <div className="p-4 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-md transition-all duration-300 text-4xl">
                  {item.icon}
                </div>
                <div>
                  <p className="mb-2 font-semibold">{item.title}</p>
                  <p className="text-sm">({item.subtitle} open positions)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedJobs;
