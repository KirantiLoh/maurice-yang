import HeroSection from "@modules/HeroSection";
import { type NextPage } from "next";
import Navbar from "@components/Navbar";
import ExperienceSection from "@modules/ExperienceSection";
import SkillSection from "@modules/SkillSection";
import ProjectSection from "@modules/ProjectSection";
import Footer from "@modules/Footer";

const Home: NextPage = () => {


  return (
    <>
      <Navbar />
      <section className="snap-y snap-mandatory">
        <HeroSection />
        <ExperienceSection />
      </section>
      <SkillSection />
      <section className="snap-y snap-mandatory">
        <ProjectSection />
      </section>
      <Footer />
    </>
  );
};

export default Home;
