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
            <p className="text-[22px] font-semibold mt-1">Dedication</p>
          </div>
          <img src={dedication} alt="" className="w-[70px]" />
        </div>
        <div>
          <p className="font-poppins text-[#54545F] font-normal">
            Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
            aliquip ex ea commo do conse namber onequat.
          </p>
        </div>
      </div>
      <div className="flex  flex-col">
        <div className="flex justify-between items-center pb-8 mb-8 border-b-[1px] hover:border-[#b4adad]">
          <div className="font-barlow">
            <p className="text-[#FB503B]">02</p>
            <p className="text-[22px] font-semibold mt-1">Smart Intelligence</p>
          </div>
          <img src={smartWork} alt="" className="w-[70px]" />
        </div>
        <div>
          <p className="font-poppins text-[#54545F] font-normal">
            Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
            aliquip ex ea commo do conse namber onequat.
          </p>
        </div>
      </div>
      <div className="flex  flex-col">
        <div className="flex justify-between items-center pb-8 mb-8 border-b-[1px] hover:border-[#b4adad]">
          <div className="font-barlow">
            <p className="text-[#FB503B]">03</p>
            <p className="text-[22px] font-semibold mt-1">Intelligence</p>
          </div>
          <img src={intelligence} alt="" className="w-[70px]" />
        </div>
        <div>
          <p className="font-poppins text-[#54545F] font-normal">
            Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
            aliquip ex ea commo do conse namber onequat.
          </p>
        </div>
      </div>
    </div>
  );
}
