import Hero from "../components/sections/hero";
import Values from "../components/sections/values";

export default function LandingPage() {
  return (
    <div className="font-bold">
      <div>
        <Hero />
      </div>
      <div className="px-72  max-[1600px]:px-40 max-[1300px]:px-10 max-[500px]:px-3 dark:bg-[#252439]">
        <Values />
      </div>
    </div>
  );
}
