import Experience from "../components/experience/experience";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";
import Hero from "../components/sections/hero";
import Portfolio from "../components/sections/portfolio";
import SkillRating from "../components/sections/skillsRating";
import Testimonial from "../components/sections/testimonial";
import Values from "../components/sections/values";

export default function LandingPage() {
  return (
    <div className="font-bold animate">
      <div id="hero">
        <Hero />
      </div>
      <div className="px-72  max-[1600px]:px-40 max-[1300px]:px-10 max-[500px]:px-3 dark:bg-[#252439] pb-20 relative">
        <div>
          <Values />
        </div>
        <div id="about">
          <About />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <SkillRating />
        </div>
        <div id="service" className="">
          <Experience />
        </div>
        <div className="relative pt-[100px]">
          <Testimonial />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
