import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <main>
      <Hero />
     
      <Skills />
      <Services />
     
      <Education />
      <Experience />
      <Achievements />
     
    </main>
  );
}