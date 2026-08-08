import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import ScrollProgress from "@/components/progress/ScrollProgress";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}