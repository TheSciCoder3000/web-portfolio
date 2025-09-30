import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen dark:bg-black">
      <Navbar />
      <HeroSection />
    </div>
  );
}
