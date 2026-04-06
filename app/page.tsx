
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";




export default function Home() {
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section id="home"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="stack"><TechStack /></section>
      <section id="contact" ><Contact /></section>
    </div>
  );
}
