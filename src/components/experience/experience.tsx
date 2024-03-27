import { FaReact } from "react-icons/fa";
import { timeLineElement } from "../../constant/timeline";

export default function Experience() {
  return (
    <div className="mt-20">
      <div className="flex justify-center align-items">
        <p className="font-barlow font-medium text-[24px] text-[#fb503b]  mb-8 dark:text-[#fb503b] ">
          Experience
        </p>
      </div>
      <div className="flex flex-col justify-center items-center   pb-8 sm:text-lg w-full">
        {timeLineElement.map((element) => {
          return (
            <div key={element.title} className="flex m-4 relative font-barlow">
              {/* <div className="w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 lg:hidden"></div>
              <div className="w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 lg:hidden"></div> */}
              <div className="hidden md:flex items-start w-fit pt-0.5 relative ">
                <div className="px-2 rounded-lg font-medium text-[20x] text-[#54545F]  dark:text-[#d5d5d5] border">
                  {element.duration}
                </div>
                {/* <div className="w-px h-full translate-x-5 translate-y-10 opacity-30 bg-red-600"></div> */}
                {/* <FaReact className="w-[20px] p-1 rounded-lg z-[10px]" size={60} /> */}
              </div>
              <div className="h-[2px] min-w-8 translate-y-4   bg-[#54545F] dark:bg-[#d5d5d5] max-md:hidden"></div>

              <div className="border  rounded-lg px-8 py-4  w-full text-center z-[10px] max-w-[800px]">
                <div className=" font-medium text-center text-[#54545F] text-[20px] dark:text-[#d5d5d5]">
                  {element.title}
                </div>
                <div className="text-[#54545F] font-medium text-[20px] max-lg:text-[16px] dark:text-[#d5d5d5]">
                  {element.company}
                </div>
                <div className=" mb-6 text-[#54545F] font-normal text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5]">
                  {element.location}{" "}
                  <span className="max-md:hidden">{element.duration}</span>{" "}
                </div>
                <div className="mb-4 text-left text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
                  {element.exp1}
                </div>
                <div className="mb-4 text-left text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
                  {element.exp2}
                </div>
                <div className="mb-4 text-left text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
                  {element.exp3}
                </div>
                <div className="mb-4 text-left text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
                  {element.exp4}
                </div>

                <div></div>
                <FaReact className="w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden " />
                <a href=""></a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
