import HeroSection from "@modules/HeroSection";
import { type NextPage } from "next";
import Navbar from "@components/Navbar";
import ExperienceSection from "@modules/ExperienceSection";
import SkillSection from "@modules/SkillSection";
import ProjectSection from "@modules/ProjectSection";
import Footer from "@modules/Footer";

const Home: NextPage = () => {


  return (
      <main className="w-full min-h-screen bg-background text-white font-poppins">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
        <Footer />
      </main>
  );
};

export default Home;
