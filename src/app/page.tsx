import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Contact />
    </>
  );
}
