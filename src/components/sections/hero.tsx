import { useEffect, useState } from "react";
import NavBar from "../navigations/NavBar";
import Intro from "../introduction/intro";
import { useAppSelector } from "../../redux/store";

export default function Hero() {
  const [scrolling, setScrolling] = useState(false);
  const theme = useAppSelector((state) => state.theme.theme);

  const handleScroll = () => {
    setScrolling(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hero-bg min-h-screen font-barlow bg-no-repeat bg-cover pb-10 ">
      <div className="">
        <div
          className={`fixed z-10 w-full max-lg:bg-white dark:max-lg:bg-[#252439] ${
            scrolling
              ? theme === "light"
                ? "bg-white"
                : "dark:bg-[#252439]"
              : ""
          }`}
        >
          <div className="mx-72  max-[1600px]:mx-40 max-[1300px]:mx-10 animate max-[500px]:mx-3">
            <NavBar onScroll={scrolling} />
          </div>
        </div>
      </div>
      <div className="pt-48 px-72  max-[1600px]:px-40 max-[1300px]:px-10 max-[500px]:px-3">
        <Intro />
      </div>
    </div>
  );
}
