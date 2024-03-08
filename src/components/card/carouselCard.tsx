import quote from "../../assets/images/quote.svg";

interface PropsType {
  title: string;
  name: string;
  imgSrc: string;
  testimony: string;
}

export default function Card({ title, name, imgSrc, testimony }: PropsType) {
  return (
    <div className="bg-white rounded-xl shadow-xl">
      <div className=" px-6 max-lg:px-6 max-sm:px-4 py-10 rounded-lg flex justify-center flex-col items-center text-center  mt-3">
        <img src={quote} alt="" className="w-[50px] mb-8 text-[#fb503b]" />
        <p className="text-[#54545f] font-poppins text-[22px] font-normal max-w-[380px] mb-8 max-lg:text-[20px] max-[800px]:max-w-full inline-block">
          <em>{testimony}</em>
        </p>
        <div className="flex justify-center items-center">
          <img src={imgSrc} alt="" className="w-[70px] h-[70px] rounded-full" />
          <div className="ml-5 font-poppins ">
            <p className="text-[20px] font-medium max-sm:text-[18px]">{name}</p>
            <p className="text-[#a29fac] font-normal  max-sm:text-[16px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
