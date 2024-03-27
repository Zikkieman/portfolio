import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { timeLineElement } from "../../constant/timeline";

export default function Experience({ defaultColor }: any) {
  // const color = defaultColor || `bg-${color}`
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
    // <div className="mt-[60px]  mb-[200px]">
    //   <div className="flex justify-center align-items">
    //     {" "}
    //     <p className="font-barlow font-medium text-[24px] text-[#fb503b]  mb-8 dark:text-[#fb503b] ">
    //       Experience
    //     </p>
    //   </div>
    //   <div className="relative   h-full w-[100%] flex font-barlow">
    //     <div className="w-1/2 flex flex-col items-end pr-10">
    //       <div>
    //         <p className="font-medium text-[20px] text-[#54545F] mb-2 dark:text-[#d5d5d5]">
    //           January 2021 - August 2021
    //         </p>
    //         <p className="text-[#54545F] font-normal text-[18px] max-lg:text-[16px] dark:text-[#d5d5d5]">
    //           Software Development Intern
    //         </p>
    //       </div>

    //       <div className="mt-[280px]">
    //         <p className="font-medium text-[20px] text-[#54545F] mb-2 dark:text-[#d5d5d5]">
    //           September 2021 - Present
    //         </p>
    //         <p className="text-[#54545F] font-normal text-[18px] max-lg:text-[16px] dark:text-[#d5d5d5]">
    //           Freelance Web and Mobile Developer
    //         </p>
    //       </div>
    //     </div>
    //     <div className="h-[360px] border-r border w-[1px] border-black relative dark:border-[#d5d5d5]">
    //       <div className="absolute rounded-full w-[20px] h-[20px] bg-[#fb503b] right-[-10px] top-[-1px]"></div>
    //       <div className="absolute rounded-full w-[20px] h-[20px] bg-[#fb503b] right-[-10px] top-[350px]"></div>
    //     </div>

    //     <div className="flex flex-col w-1/2 borde">
    //       <div className=" flex flex-col pl-10">
    //         <p className="text-[#54545F] font-medium text-[20px] max-lg:text-[16px] dark:text-[#d5d5d5] mb-2">
    //           Cyrus Technologies
    //         </p>
    //         <p className="text-[#54545F] font-normal text-[18px] max-lg:text-[16px] dark:text-[#d5d5d5]">
    //           Lagos, Nigeria
    //         </p>
    //         <div className="flex flex-col gap-y-2">
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5]  flex ">
    //             <span className="text-[30px] font-extrabold mr-5 my-0  mt-[-5px]">
    //               &#x2022;
    //             </span>
    //             <span className="my-2">
    //               Assisted in the development and maintenance of web and mobile
    //               applications with TailwindCSS, Typescript, Next.js,
    //               React-Native (Expo), Redux React.js and Node.js.
    //             </span>
    //           </p>
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] flex">
    //             <span className="text-[30px] font-extrabold mr-5 mt-[-12px]">
    //               &#x2022;
    //             </span>
    //             <span>
    //               {" "}
    //               Developed effective collaboration and communication skills,
    //               both within the development team and with stakeholders.
    //               Practice working in an Agile environment, participating in
    //               sprint planning, daily stand-ups, and code reviews.
    //             </span>
    //           </p>
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
    //             <span className="text-[30px] font-extrabold mr-5 mt-[-12px]">
    //               &#x2022;
    //             </span>
    //             <span>
    //               Wrote clean and maintainable code, implementing responsive
    //               design principles, optimizing performance, handling
    //               asynchronous operations (such as fetching data from APIs), and
    //               ensuring accessibility and cross-browser compatibility.
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //       {/* freelance */}
    //       <div className=" flex flex-col pl-10 mt-[40px]">
    //         <p className="text-[#54545F] font-medium text-[20px] max-lg:text-[16px] dark:text-[#d5d5d5] mb-2">
    //           Lagos, Nigeria
    //         </p>
    //         <div className="flex flex-col gap-y-2">
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5]  flex ">
    //             <span className="text-[30px] font-extrabold mr-5 my-0  mt-[-5px]">
    //               &#x2022;
    //             </span>
    //             <span className="my-2">
    //               Leveraged expertise in Typescript, Nativewind, Next.js,
    //               React-Native (Expo), Redux toolkit (RTK QUERY), React.js, and
    //               Node.js to develop and maintain high-quality web and mobile
    //               applications for diverse clients.
    //             </span>
    //           </p>
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] flex">
    //             <span className="text-[30px] font-extrabold mr-5 mt-[-12px]">
    //               &#x2022;
    //             </span>
    //             <span>
    //               Implemented optimized image formats, employed Agile
    //               methodologies for iterative development, and utilized code
    //               splitting techniques to enhance application performance.
    //               Leveraged minification, lazy loading, and caching strategies
    //               to reduce the application loading time.
    //             </span>
    //           </p>
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
    //             <span className="text-[30px] font-extrabold mr-5 mt-[-12px]">
    //               &#x2022;
    //             </span>
    //             <span>
    //               Established clear and transparent communication channels with
    //               clients, designers, and other developers, fostering strong
    //               relationships and understanding their evolving needs.
    //             </span>
    //           </p>
    //           <p className="text-[#54545F] font-medium text-[16px] max-lg:text-[16px] dark:text-[#d5d5d5] my-2 flex">
    //             <span className="text-[30px] font-extrabold mr-5 mt-[-12px]">
    //               &#x2022;
    //             </span>
    //             <span>
    //               Crafting captivating web and mobile applications that not only
    //               deliver seamless user experiences but also drive tangible
    //               business results. Through strategic design and development,
    //               I've helped clients achieve a significant increase in sales by
    //               up to 20%, showcasing the power of engaging digital solutions
    //               in driving revenue growth.
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
