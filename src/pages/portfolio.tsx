import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import SkillRating from "../components/sections/skill-rating";
import Values from "../components/sections/values";

export default function LandingPage() {
  return (
    <div className="font-bold animate">
      <div>
        <Hero />
      </div>
      <div className="px-72  max-[1600px]:px-40 max-[1300px]:px-10 max-[500px]:px-3 dark:bg-[#252439] pb-20">
        <div>
          <Values />
        </div>
        <div>
          <About />
        </div>
        <div>
          <SkillRating />
        </div>
      </div>
    </div>
  );
}
