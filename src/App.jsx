/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/****************
 * NODE MODULES *
 ****************/
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/*************************
 * REGISTER GSAP PLIGINS *
 *************************/
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**************
 * COMPONENTS *
 **************/
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AuroraBackground } from "./components/ui/aurora-background";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "-200 bottom",
          end: "bottom 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <AuroraBackground allowFullScreen={true}>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Contact />
        </AuroraBackground>
      </main>

      <Footer />
    </ReactLenis>
  );
};

export default App;
