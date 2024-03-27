import heala from "../../assets/images/heala.png";
import chow from "../../assets/images/chow.png";
import kwaba from "../../assets/images/kwaba.png";

export default function Web() {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 justify-center ">
      <div className="max-w-[500x]   border-2 overflow-hidden border-[#fb503b] rounded-lg shadow-md">
        <a href="http://www.heala.ng" target="_blank">
          <img src={heala} alt="heala icon" className="h-[250px] w-full" />
          <p className="font-normal text-[18px] mt-5 dark:text-[#aaaaba] text-[#54545f] mb-5">
            A web app that optimizes healthcare delivery in Nigeria and Africa.
          </p>
        </a>
      </div>
      <div className="rounded-lg border-2 overflow-hidden border-[#fb503b] shadow-md">
        <a href="https://waitlist.chow.africa/waitlist">
          <img src={chow} alt="heala icon" className="h-[250px] w-full" />
          <p className="font-normal text-[18px] mt-5 dark:text-[#aaaaba] text-[#54545f] mb-5">
            {" "}
            A web app that allows users to decide and order a variety of food.
          </p>
        </a>
      </div>
      <div className="rounded-lg border-2 overflow-hidden border-[#fb503b] shadow-md">
        <a href="https://www.kwaba.africa/">
          <img src={kwaba} alt="heala icon" className="h-[250px] w-full" />
          <p className="font-normal text-[18px] mt-5 dark:text-[#aaaaba] text-[#54545f] mb-5">
            {" "}
            A web app that is used to save rent and access instant loans.{" "}
          </p>
        </a>
      </div>
    </div>
  );
}
