import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Crisis from "@/components/Crisis";
import Solution from "@/components/Solution";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <Hero />
      <Crisis />
      <Solution />
      <Technology />
      <Footer />
    </main>
  );
}
