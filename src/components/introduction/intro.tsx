import { useEffect, useState } from "react";
import introImg from "../../assets/images/intro-img.jpg";
import trophy from "../../assets/svg/trophy.svg";

export default function Intro() {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const isHeroInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setInView(isHeroInView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      setCount(0);
    }
  }, [inView]);

  useEffect(() => {
    const endNumber = 3;
    const duration = 2000;
    const interval = 10;

    const step = (endNumber * interval) / duration;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        return newCount >= endNumber ? endNumber : newCount;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className="flex text-white justify-between max-[900px]:flex-col-reverse max-[900px]:items-center"
      id="hero-section"
    >
      <div className="mt-28 max-[900px]:mt-10 max-[900px]:text-center">
        <p className="text-[30px] font-medium max-[900px]:mb-2 max-[900px]:text-[22px] ">
          Hello I'm
        </p>
        <p className="text-[65px] max-[1100px]:text-[50px] max-[900px]:text-[30px]  font-semibold mt-[-15px]">
          Ezekiel Oladele
        </p>
        <p className="text-[22px] font-medium max-[900px]:mb-2 mb-5">
          Web and Mobile React Developer
        </p>
        <p className="text-[22px] font-normal font-sans inline-block max-w-[520px] max-[900px]:max-w-full  max-[900px]:text-[18px]">
          Skills are the only luggage you can carry with you that doesn't weigh
          you down.
        </p>
        <div className="flex gap-x-10 mt-5 max-[900px]:justify-center">
          <button className="px-6 text-[18px] font-semibold py-3 bg-[#142EB5] rounded-full hover:bg-[#fb503b]">
            Get a quote
          </button>
          <button className="text-[18px] font-semibold">About Me</button>
        </div>
      </div>
      <div className="relative h-[700px] max-[900px]:h-fit w-[600px] max-[900px]:w-fit max-[500px]:w-full max-lg:w-[500px] mr-[-40px] max-[900px]:mr-[0px]  flex ml-5 max-[900px]:ml-0 max-[900px]:flex max-[900px]:items-center ">
        <div className="bg-white absolute p-7 rounded-xl right-0 max-[1100px]:hidden">
          {" "}
          <img src={trophy} alt="" className="w-[80px]" />
        </div>
        <div className="absolute bg-white px-5 py-1 rounded-xl text-black flex justify-center items-center bottom-[150px] max-[900px]:bottom-[30px]">
          <span className="text-[50px] text-[#50C5F0]">
            {" "}
            {Math.ceil(count)}
          </span>{" "}
          <span className="text-[17px] w-20 inline-block ml-3 my-0">
            Years of Success
          </span>
        </div>
        <img
          src={introImg}
          alt=""
          className="w-[500px] max-[900px]:w-full max-lg:w-[400px] h-[520px] max-[900px]:h-[400px] rounded-xl mt-16 max-[900px]:mt-0 ml-[60px] max-[1100px]:ml-[0px]"
        />
      </div>
    </div>
  );
}
