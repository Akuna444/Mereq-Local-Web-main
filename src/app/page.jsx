import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";
import Partners from "@/components/Home/Partners";
import Contact from "@/components/Home/Contact";
import Team from "@/components/Home/Team";
import Posts from "@/components/Home/Posts";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Partners />
      <Contact />
      <Team />
      <Posts />
    </>
  );
}
