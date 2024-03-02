import mainAbout from "../../assets/images/main-about.jpg";
import subAbout from "../../assets/images/sub-about.jpg";
import connect from "../../assets/svg/connect.svg";

export default function About() {
  return (
    <div className="relative mb-40 ">
      <div className="absolute max-w-[350px]   -mx-44 bottom-[-100px] rounded-xl  max-lg:hidden ">
        <img src={subAbout} alt="" className="rounded-xl max-w-full h-auto" />
      </div>

      <div className="bg-[#3B383F] w-fit p-5 absolute max-w-[390px] -mx-56  bottom-[0px] rounded-xl">
        <img src={connect} alt="" className="w-[70px]" />
      </div>

      <div className="flex max-lg:flex-col ">
        <div className="flex-1">
          <img
            src={mainAbout}
            alt=""
            className="rounded-xl h-full max-lg:w-full"
          />
        </div>
        <div className="flex-1 pl-20 mt-5 max-xl:pl-0">
          <p className="font-barlow font-semibold text-[20px] text-[#FB503B]">
            I'm a Developer
          </p>
          <p className="font-barlow text-[35px] font-semibold inline-block max-w-[400px] mb-10 dark:text-white">
            I Develop Application that Help People
          </p>
          <p className="mb-10 font-poppins font-normal text-[#54545f] text-[18px] dark:text-[#AAAABA]">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatu epteur sint occaecat cupidatat
          </p>
          <p className="mb-10 font-poppins  font-normal text-[#54545f] text-[18px] dark:text-[#AAAABA]">
            Krnon proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Sed ut perspiciatis unde omnis
          </p>
          <button className="bg-[#142EB5] px-5 py-4 rounded-full text-white font-poppins font-medium">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
