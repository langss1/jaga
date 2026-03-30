import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Development from "@/components/Development";
import Crisis from "@/components/Crisis";
import Story from "@/components/Story";
import Solution from "@/components/Solution";
import Technology from "@/components/Technology";
import Teaser from "@/components/Teaser";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <Hero />
      <Development />
      <Crisis />
      <Story />
      <Solution />
      <Technology />
      <Teaser />
      <News />
      <Footer />
    </main>
  );
}
