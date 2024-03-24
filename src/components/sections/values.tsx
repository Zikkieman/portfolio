import dedication from "../../assets/svg/dedication.svg";
import smartWork from "../../assets/svg/smart-work.svg";
import intelligence from "../../assets/svg/intelligence.svg";

export default function Values() {
  return (
    <div className="py-[150px] grid grid-cols-3 gap-16 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1">
      <div className="flex  flex-col">
        <div className="flex justify-between items-center pb-8 mb-8 border-b-[1px] hover:border-[#b4adad]">
          <div className="font-barlow">
            <p className="text-[#FB503B]">01</p>
            <p className="text-[22px] font-semibold mt-1 dark:text-white">
              Dedication
            </p>
          </div>
          <img src={dedication} alt="" className="w-[70px]" />
        </div>
        <div>
          <p className="font-poppins text-[#54545F] font-normal dark:text-[#AAAABA]">
            I am dedicated and committed to delivering innovative solutions and
            buiding interfaces that exceeds expectations.
          </p>
        </div>
      </div>
      <div className="flex  flex-col">
        <div className="flex justify-between items-center pb-8 mb-8 border-b-[1px] hover:border-[#b4adad]">
          <div className="font-barlow">
            <p className="text-[#FB503B]">02</p>
            <p className="text-[22px] font-semibold mt-1 dark:text-white">
              Smart Work
            </p>
          </div>
          <img src={smartWork} alt="" className="w-[70px]" />
        </div>
        <div>
          <p className="font-poppins text-[#54545F] font-normal dark:text-[#AAAABA]">
            I leverage the latest tools and techniques within the React
            ecosystem to efficiently solve complex problems and deliver
            high-quality solutions.
          </p>
        </div>
      </div>
      <div className="flex  flex-col">
        <div className="flex justify-between items-center pb-8 mb-8 border-b-[1px] hover:border-[#b4adad]">
          <div className="font-barlow">
            <p className="text-[#FB503B]">03</p>
            <p className="text-[22px] font-semibold mt-1 dark:text-white">
              Intelligence
            </p>
          </div>
          <img src={intelligence} alt="" className="w-[70px]" />
        </div>
        <div>
          <p className="font-poppins text-[#54545F] font-normal dark:text-[#AAAABA]">
            I have the ability to efficiently adapt to evolving technologies,
            and architect elegant solutions that optimize user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
