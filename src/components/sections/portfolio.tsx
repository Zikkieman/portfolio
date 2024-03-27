import { useEffect, useRef, useState } from "react";
import Mobile from "../portofolio/mobile";
import Web from "../portofolio/web";
import Progress from "../portofolio/progress";
import gsap from "gsap";

export default function Portfolio() {
  const [toggleState, setToggleState] = useState("web");
  const animationContainerRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  const handleToggle = (state: string) => {
    setToggleState(state);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && animationContainerRef.current) {
      gsap.from(".animation-container > div", {
        duration: 1,
        opacity: 0,
        x: 200,
        stagger: 0.9,
        ease: "power3.out",
      });
    }
  }, [hasMounted, toggleState]);

  return (
    <div className="font-barlow ">
      <div>
        <div className="flex justify-center flex-col items-center">
          <p className="text-[#fb503b] text-[24px] font-medium">Portfolio</p>
          <p className="dark:text-[#aaaaba] text-black  text-[30px] font-barlow font-semibold">
            Here are some of my amazing projects
          </p>
        </div>
        <div>
          <div className="flex border-b-2 pb-2 gap-x-10 text-[20px] mt-5 font-medium  text-[#54545f]  dark:text-[#AAAABA]">
            <div
              className={`cursor-pointer w-fit px-3 py-2 ${
                toggleState === "web" &&
                " rounded-full bg-[#f3f1f1] dark:text-[#0f0f10]"
              }`}
            >
              <p onClick={() => handleToggle("web")}>Web</p>
            </div>
            <div
              className={`cursor-pointer w-fit px-3 py-2 ${
                toggleState === "mobile" &&
                " rounded-full bg-[#f3f1f1] dark:text-[#0f0f10]"
              }`}
            >
              <p onClick={() => handleToggle("mobile")}>Mobile</p>
            </div>
            <div
              className={`cursor-pointer w-fit px-3 py-2 ${
                toggleState === "progress" &&
                " rounded-full bg-[#f3f1f1] dark:text-[#0f0f10]"
              }`}
            >
              <p onClick={() => handleToggle("progress")}>In-progress</p>
            </div>
          </div>
          <div
            className="mt-5 min-h-[400px] animation-container"
            ref={animationContainerRef}
          >
            {toggleState === "web" ? (
              <Web />
            ) : toggleState === "mobile" ? (
              <Mobile />
            ) : (
              <Progress />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
