import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";

export default function Home() {
  return (
    // <div className="w-full dark:bg-[#24292E]">
    <div className="w-full dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <About />
      <Project />
    </div>
  );
}
