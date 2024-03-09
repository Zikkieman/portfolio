import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { useEffect, useRef } from "react";

export default function Contact() {
  const divRef = useRef<HTMLDivElement>(null);

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
    <div>
      <div className="mb-20 text-center font-barlow font-medium mt-20">
        <p className="text-[40px] text-[#fb503b] font-semibold">Get In Touch</p>
        <p className="text-[20px] max-w-[900px] inline-block mt-3 text-[#54545f] dark:text-[#aaaaba]">
          I am actively seeking opportunities and roles that resonate with my
          expertise. I look forward to sharing more about my experience and
          ultimately providing value to your team.
        </p>
      </div>
      <div className="bg-[#0B1C77] py-24 px-16 max-sm:px-4 rounded-2xl animate">
        <div className="flex max-lg:flex-col" ref={divRef}>
          <div className="flex flex-col flex-1">
            <p className="text-[#fb503b] font-barlow text-[20px] font-semibold">
              Don't be shy
            </p>
            <p className="text-[30px] text-white font-barlow font-semibold mb-10">
              Drop Me a Line
            </p>
            <form className="flex flex-col gap-y-4">
              <input
                placeholder="Name"
                className="py-4 px-5 font-barlow font-normal text-[18px] rounded-lg outline-none"
              />
              <input
                placeholder="Email"
                className="py-4 px-5 font-barlow font-normal text-[18px] rounded-lg outline-none"
              />
              <textarea
                className="py-4 px-5 font-barlow font-normal text-[18px] rounded-lg outline-none resize-none"
                placeholder="Message"
                rows={8}
              ></textarea>
              <button
                type="submit"
                className="bg-[#fb503b] font-barlow font-semibold text-white py-3 rounded-lg text-[18px] transition-all hover:bg-white hover:text-black hover:translate-y-[-3px] duration-500 "
              >
                Submit Message
              </button>
            </form>
          </div>
          <div className="flex-1 flex flex-col mt-28 pl-20 max-lg:pl-0 gap-y-10">
            <div className="flex items-center gap-x-10 max-sm:gap-x-3">
              <div className="bg-[#6e7fd1] rounded-full w-[90px] h-[90px] flex justify-center items-center max-sm:w-[60px] max-sm:h-[60px]">
                <FaLocationDot size={22} className="text-white" />
              </div>
              <div className="font-barlow">
                <p className="text-white text-[20px] font-semibold">Address</p>
                <p className="text-[#b7bac5] font-normal text-[18px] max-sm:text-[16px]">
                  Lagos, Nigeria.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-10 max-sm:gap-x-3">
              <div className="bg-[#6e7fd1] rounded-full w-[90px] h-[90px] flex justify-center items-center max-sm:w-[60px] max-sm:h-[60px]">
                <MdEmail size={22} className="text-white" />
              </div>
              <div className="font-barlow">
                <p className="text-white text-[20px] font-semibold">Email</p>
                <p className="text-[#b7bac5] font-normal text-[18px] max-sm:text-[16px]">
                  horlarmeydeileh50@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-10 max-sm:gap-x-3">
              <div className="bg-[#6e7fd1] rounded-full w-[90px] h-[90px] flex justify-center items-center max-sm:w-[60px] max-sm:h-[60px]">
                <BiSolidPhone size={22} className="text-white" />
              </div>
              <div className="font-barlow">
                <p className="text-white text-[20px] font-semibold">Phone</p>
                <p className="text-[#b7bac5] font-normal text-[18px] max-sm:text-[16px]">
                  +2348035967716
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
