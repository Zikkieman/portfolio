import star from "../../assets/svg/star-app.svg";
import cpu from "../../assets/svg/cpu.svg";
import phone from "../../assets/svg/phone.svg";
import web from "../../assets/svg/web.svg";

export default function Services() {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 mt-40">
      <div className="bg-[#6e7fd1] hover:bg-[#fb503b] rounded-tl-2xl pt-28  px-20 pb-20">
        <img src={cpu} alt=" " className="w-[100px] mb-10" />
        <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
          Desktop Application
        </h3>
        <p className="font-barlow text-white font-normal text-[20px]">
          Devman is a leading web design agency with an award-winning design
          team that creates innovative, effective websites that capture your
          brand.
        </p>
      </div>
      <div className="bg-[#343c55] hover:bg-[#fb503b] rounded-tr-2xl pt-28  px-20 pb-20">
        <img src={phone} alt=" " className="w-[100px] mb-10" />
        <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
          Desktop Application
        </h3>
        <p className="font-barlow text-white font-normal text-[20px]">
          Devman is a leading web design agency with an award-winning design
          team that creates innovative, effective websites that capture your
          brand.
        </p>
      </div>
      <div className="bg-[#142eb5] hover:bg-[#fb503b] rounded-bl-2xl pt-28  px-20 pb-20">
        <img src={web} alt="" className="w-[100px] mb-10" />
        <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
          Desktop Application
        </h3>
        <p className="font-barlow text-white font-normal text-[20px]">
          Devman is a leading web design agency with an award-winning design
          team that creates innovative, effective websites that capture your
          brand.
        </p>
      </div>
      <div className="bg-[#0489c8] hover:bg-[#fb503b] rounded-br-2xl pt-28  px-20 pb-20">
        <img src={star} alt=" " className="w-[100px] mb-10" />
        <h3 className="text-[30px] font-barlow font-semibold text-white mb-10">
          Desktop Application
        </h3>
        <p className="font-barlow text-white font-normal text-[20px]">
          Devman is a leading web design agency with an award-winning design
          team that creates innovative, effective websites that capture your
          brand.
        </p>
      </div>
    </div>
  );
}
