import FeaturedJobs from "./components/FeaturedJobs";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <Testimonials />
    </>
  );
};

export default Home;
