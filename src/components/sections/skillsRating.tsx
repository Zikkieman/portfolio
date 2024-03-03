// import Progress from "../skill-progress/Progress";

import Progress from "../skillProgress/progress";

export default function SkillRating() {
  return (
    <>
      <div className="flex justify-center items-center pt-32 ">
        <div className="text-center">
          <p className="font-barlow text-[#FB503B] text-[22px] font-semibold">
            My Skills
          </p>
          <p className="text-[30px] font-barlow font-semibold dark:text-white">
            I diligently cultivate my skills on a regular basis.
          </p>
          <p className="font-poppins text-[#54545F] font-normal mt-5 max-w-[750px] text-[18px] max-lg:text-[16px] dark:text-[#AAAABA]">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
      </div>
      <div>
        <Progress />
      </div>
    </>
  );
}
