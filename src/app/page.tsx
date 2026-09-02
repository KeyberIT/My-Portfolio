import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Jobs from "@/components/sections/Jobs";
import Featured from "@/components/sections/Featured";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <main className="flex-1 w-full flex flex-col items-center pt-24">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </main>
    </SplashScreen>
  );
}
