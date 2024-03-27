import mainAbout from "../../assets/images/main-about.jpg";
// import subAbout from "../../assets/images/sub-about.jpg";
// import connect from "../../assets/svg/connect.svg";

export default function About() {
  return (
    <div className="relative mb-40 ">
      <div className="absolute max-w-[350px]   -mx-44 bottom-[-100px] rounded-xl  max-lg:hidden "></div>

      <div className="flex max-lg:flex-col ">
        <div className="flex-1">
          <img
            src={mainAbout}
            alt=""
            className="rounded-xl h-full max-lg:w-full"
          />
        </div>
        <div className="flex-1 pl-14 mt-5 max-lg:pl-0">
          <p className="font-barlow font-semibold text-[24px] text-[#FB503B] mb-6">
            I'm a Enthusiastic Web and Mobile Developer
          </p>

          <p className=" font-poppins font-normal text-[#54545f] text-[18px] dark:text-[#AAAABA]">
            My career journey began with a fervent interest in software
            technology, driving me to pursue skill development. Over time, I
            honed my skills in frontend and backend development, utilizing
            technologies such as React.js, Next.js, Vite, React Native (Expo),
            and various UI libraries like Tailwindcss, Chakra UI, and Material
            UI. Backend development involved Node.js and Express.js, while Git
            facilitated effective collaboration. I have also had the privilege
            of working alongside some of the best minds in the field in
            different industries.
          </p>
          <p className="mb-10 mt-3 font-poppins  font-normal text-[#54545f] text-[18px] dark:text-[#AAAABA]">
            When I'm not coding, I typically engage in activities to develop my
            entrepreneurial side, such as reading books. Additionally, I enjoy
            playing musical instruments like Piano, Saxophone and Drum set.
          </p>
          <button className="bg-[#142EB5] px-5 py-4 rounded-full text-white font-poppins font-medium">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
