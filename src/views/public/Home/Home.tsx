import Application from "./components/Application";
import CompanyLogo from "./components/CompnayLogo";
import FeaturedJobs from "./components/FeaturedJobs";
import Hero from "./components/Hero";
import JobOpportunity from "./components/JobOpportunity";
import PopularCategories from "./components/PopularCategories";
import RecentArticle from "./components/RecentArticle";
import Recruit from "./components/Recruit";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <Testimonials />
      <CompanyLogo />
      <JobOpportunity />
      <RecentArticle />
      <Application />
      <Recruit />
    </>
  );
};

export default Home;
