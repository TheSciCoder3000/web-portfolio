import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Project from "@/components/Projects";

export default function Home() {
  return (
    // <div className="w-full dark:bg-[#24292E]">
    <div className="home-page w-full transition-colors duration-500 dark:bg-gray-900">
      <HeroSection />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
