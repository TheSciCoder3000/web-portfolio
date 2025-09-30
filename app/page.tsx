import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full dark:bg-black">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}
