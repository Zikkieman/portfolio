import star from "../../assets/svg/star-app.svg";
import cpu from "../../assets/svg/cpu.svg";
import phone from "../../assets/svg/phone.svg";
import web from "../../assets/svg/web.svg";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const divRef = useRef<HTMLDivElement>(null);
  const [openWorkStrategy, setOpenWorkStrategy] = useState(true);
  const [openProcess, setopenProcess] = useState(false);

  const [openDevelopment, setOpenDevelopment] = useState(false);

  const [openHardWork, setOpenHardWork] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        divRef.current?.classList.add("animatedDiv");
      } else {
        divRef.current?.classList.remove("animatedDiv");
      }
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className="animate">
      <div
        className={`grid grid-cols-2 max-lg:grid-cols-1 mt-40  ${``}`}
        ref={divRef}
      >
        <div className="bg-[#6e7fd1] hover:bg-[#fb503b] rounded-tl-2xl  max-lg:rounded-tr-2xl pt-28  px-20 pb-20 max-md:pt-10 max-md:px-3 max-md:pb-5">
          <img src={cpu} alt=" " className="w-[100px] mb-10" />
          <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
            Desktop Application
          </h3>
          <p className="font-barlow text-white font-normal text-[20px]">
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand.
          </p>
        </div>
        <div className="bg-[#343c55] hover:bg-[#fb503b] rounded-tr-2xl max-lg:rounded-tr-none pt-28  px-20 pb-20 max-md:pt-10 max-md:px-3 max-md:pb-5">
          <img src={phone} alt=" " className="w-[100px] mb-10" />
          <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
            Desktop Application
          </h3>
          <p className="font-barlow text-white font-normal text-[20px]">
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand.
          </p>
        </div>
        <div className="bg-[#142eb5] hover:bg-[#fb503b]  rounded-bl-2xl max-lg:rounded-bl-none pt-28  px-20 pb-20 max-md:pt-10 max-md:px-3 max-md:pb-5">
          <img src={web} alt="" className="w-[100px] mb-10" />
          <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
            Desktop Application
          </h3>
          <p className="font-barlow text-white font-normal text-[20px]">
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand.
          </p>
        </div>
        <div className="bg-[#0489c8] hover:bg-[#fb503b] rounded-br-2xl max-lg:rounded-bl-2xl pt-28  px-20 pb-20 max-md:pt-10 max-md:px-3 max-md:pb-5">
          <img src={star} alt=" " className="w-[100px] mb-10" />
          <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
            Desktop Application
          </h3>
          <p className="font-barlow text-white font-normal text-[20px]">
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 my-32 gap-y-10">
        <div>
          <p className="font-barlow text-[22px] text-[#FB503B] font-semibold ">
            Working to make difference
          </p>
          <p className="text-[35px] font-barlow font-semibold max-w-[350px] max-lg:max-w-full inline-block dark:text-white">
            Real Passion to Create Amazing Things
          </p>
          <p className="font-poppins text-[16px] text-[#54545F] font-normal mt-8 max-w-[490px] max-lg:max-w-full dark:text-[#AAAABA]">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        <div className="flex gap-y-10 flex-col">
          <div>
            <div
              className=" flex gap-10 items-center cursor-pointer w-fit"
              onClick={() => {
                setOpenWorkStrategy(!openWorkStrategy),
                  setOpenDevelopment(false),
                  setOpenHardWork(false),
                  setopenProcess(false);
              }}
            >
              <div className="w-fit ">
                <div
                  className={`h-[20px] w-[4px] bg-black dark:bg-white transition-transform duration-300 ease-in-out transform   ${
                    openWorkStrategy ? "rotate-[90deg]" : "rotate-0"
                  } `}
                ></div>
                <div className="h-[20px] w-[4px] bg-black rotate-[90deg] translate-y-[-20px] dark:bg-white"></div>
              </div>
              <p className="font-barlow text-[24px] font-semibold -mt-5 dark:text-white">
                Work Strategy
              </p>
            </div>
            {openWorkStrategy && (
              <div
                className={`transition-all duration-200 ease-in-out  overflow-hidden grid ${
                  openWorkStrategy
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="font-poppins text-[#54545f] text-[18px] font-normal ml-10 overflow-hidden dark:text-[#AAAABA]">
                  Ut enim ad minim veniam, quis nostrud exercitation utur
                  adipisicing elit, sed do eiusmod einisha chor amay vebona
                  sukher mohona kobita tumi sopono carini hoye.
                </p>
              </div>
            )}
          </div>
          <div>
            <div
              className=" flex gap-10"
              onClick={() => {
                setopenProcess(!openProcess),
                  setOpenWorkStrategy(false),
                  setOpenDevelopment(false),
                  setOpenHardWork(false);
              }}
            >
              <div className="w-fit">
                <div
                  className={`h-[20px] w-[4px] bg-black dark:bg-white transition-transform duration-300 ease-in-out transform  ${
                    openProcess ? "rotate-[90deg]" : "rotate-0"
                  } `}
                ></div>
                <div className="h-[20px] w-[4px] bg-black dark:bg-white rotate-[90deg] translate-y-[-20px]"></div>
              </div>
              <p className="font-barlow text-[24px] font-semibold -mt-2 dark:text-white">
                The Process of Our Work
              </p>
            </div>
            {openProcess && (
              <div
                className={`transition-all duration-200 ease-in-out  overflow-hidden grid  ${
                  openProcess
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="font-poppins text-[#54545f] text-[18px] font-normal ml-10 overflow-hidden dark:text-[#AAAABA]">
                  Ut enim ad minim veniam, quis nostrud exercitation utur
                  adipisicing elit, sed do eiusmod einisha chor amay vebona
                  sukher mohona kobita tumi sopono carini hoye.
                </p>
              </div>
            )}
          </div>
          <div>
            <div
              className=" flex gap-10 cursor-pointer"
              onClick={() => {
                setOpenDevelopment(!openDevelopment),
                  setopenProcess(false),
                  setOpenWorkStrategy(false),
                  setOpenHardWork(false);
              }}
            >
              <div className="w-fit">
                <div
                  className={`h-[20px] w-[4px] bg-black dark:bg-white transition-transform duration-300 ease-in-out transform  ${
                    openDevelopment ? "rotate-[90deg]" : "rotate-0"
                  } `}
                ></div>
                <div className="h-[20px] w-[4px] bg-black dark:bg-white rotate-[90deg] translate-y-[-20px]"></div>
              </div>
              <p className="font-barlow text-[24px] font-semibold -mt-2 dark:text-white">
                Core Value of Development
              </p>
            </div>
            {openDevelopment && (
              <div
                className={`transition-all duration-200 ease-in-out  overflow-hidden grid ${
                  openDevelopment
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="font-poppins text-[#54545f] text-[18px] font-normal ml-10 overflow-hidden dark:text-[#AAAABA]">
                  Ut enim ad minim veniam, quis nostrud exercitation utur
                  adipisicing elit, sed do eiusmod einisha chor amay vebona
                  sukher mohona kobita tumi sopono carini hoye.
                </p>
              </div>
            )}
          </div>
          <div>
            <div
              className=" flex gap-10 cursor-pointer"
              onClick={() => {
                setOpenHardWork(!openHardWork),
                  setOpenDevelopment(false),
                  setopenProcess(false),
                  setOpenWorkStrategy(false);
              }}
            >
              <div className="w-fit">
                <div
                  className={`h-[20px] w-[4px] bg-black dark:bg-white transition-transform duration-300 ease-in-out transform ${
                    openHardWork ? "rotate-[90deg]" : "rotate-0"
                  } `}
                ></div>
                <div className="h-[20px] w-[4px] bg-black dark:bg-white rotate-[90deg] translate-y-[-20px]"></div>
              </div>
              <p className="font-barlow text-[24px] font-semibold -mt-2 dark:text-white">
                Desire to Work Hard
              </p>
            </div>
            {openHardWork && (
              <div
                className={`transition-all duration-200 ease-in-out  overflow-hidden grid ${
                  openHardWork
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="font-poppins text-[#54545f] text-[18px] font-normal ml-10 overflow-hidden dark:text-[#AAAABA]">
                  Ut enim ad minim veniam, quis nostrud exercitation utur
                  adipisicing elit, sed do eiusmod einisha chor amay vebona
                  sukher mohona kobita tumi sopono carini hoye.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
