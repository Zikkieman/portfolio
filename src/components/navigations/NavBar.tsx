import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { changeMenuToggler } from "../../redux/features/toggleSlice";
import { MenuButton } from "./menu";
import { useState } from "react";

interface PropsType {
  onScroll: boolean;
}
export default function NavBar({ onScroll }: PropsType) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useAppSelector((state) => state.toggler.menu);
  const dispatch = useDispatch<AppDispatch>();

  const changeMenuHandler = (index: number) => {
    dispatch(changeMenuToggler(index));
  };

  return (
    <div className="">
      <div
        className={`flex justify-between  py-5 max-lg:py-2 relative ${
          onScroll ? "text-black" : "text-white"
        } `}
      >
        <div className="flex-1 flex items-center">
          <p className=" font-medium text-[40px] max-lg:text-[30px] max-lg:text-black">
            EazyDev
          </p>
        </div>

        <div className="flex gap-x-10 justify-between items-center text-xl font-medium max-lg:hidden">
          <div onClick={() => changeMenuHandler(1)} className="cursor-pointer">
            <p className={`${toggleMenu === 1 && "text-[#fb503b]"}`}>Home</p>
          </div>
          <div onClick={() => changeMenuHandler(2)} className="cursor-pointer">
            <p className={`${toggleMenu === 2 && "text-[#fb503b]"}`}>About</p>
          </div>
          <div onClick={() => changeMenuHandler(3)} className="cursor-pointer">
            <p className={`${toggleMenu === 3 && "text-[#fb503b]"}`}>
              Portfolio
            </p>
          </div>
          <div onClick={() => changeMenuHandler(4)} className="cursor-pointer">
            <p className={`${toggleMenu === 4 && "text-[#fb503b]"}`}>Service</p>
          </div>
          <div onClick={() => changeMenuHandler(5)} className="cursor-pointer">
            <p className={`${toggleMenu === 5 && "text-[#fb503b]"}`}>Contact</p>
          </div>
          <div onClick={() => changeMenuHandler(6)} className="cursor-pointer">
            <p className={`${toggleMenu === 6 && "text-[#fb503b]"}`}>Blog</p>
          </div>
          <div className="bg-[#fb503b] py-2 px-5 rounded-full text-white">
            <p>Download CV</p>
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center">
          <MenuButton
            onTap={setOpenMenu}
            onClick={setIsMenuOpen}
            onOpen={isMenuOpen}
          />
        </div>

        {/* menuNavbar */}
      </div>
      {openMenu && (
        <div className="">
          <div className="flex flex-col gap-y-5 text-xl font-medium border-t-[1px] py-5 mx-[-40px] px-10 menu-drawer">
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>Home</p>
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>About</p>
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>Portfolio</p>
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>Service</p>
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>Contact</p>
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>Blog</p>
            </div>
            <div className="bg-[#fb503b] py-2 px-5 rounded-full text-white w-fit">
              <p>Download CV</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
