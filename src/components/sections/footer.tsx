import { useLayoutEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>();

  useLayoutEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear(); // Corrected line
    setYear(currentYear);
  }, []);

  return (
    <div className="bg-[#343c55] text-[#b7bac5]  py-20 px-72 max-[1600px]:px-40 max-[1300px]:px-10 max-[500px]:px-3 pb-20 relative">
      <div className="flex justify-between max-[750px]:flex-col-reverse max-[750px]:gap-y-10 ">
        <p className="font-medium font-barlow text-[18px] max-[750px]:mx-auto max-[750px]:mt-10">
          © {year} EazyDev
        </p>
        <div className="grid grid-cols-4 font-medium text-[18px] font-barlow gap-16 max-[500px]:grid-cols-2">
          <p className="hover:text-[#cccaca]">
            <a
              href="https://www.linkedin.com/in/ezekieloladele/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="hover:text-[#cccaca]">
            {" "}
            <a
              href="https://www.github.com/zikkieman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
            </a>
          </p>
          <p className="hover:text-[#cccaca]">
            <a
              href="https://www.twitter.com/ezekieloladel13"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>

          <p className="hover:text-[#cccaca]">
            {" "}
            <a
              href="https://wa.me/+2348035967716"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
