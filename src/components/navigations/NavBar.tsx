import { MenuButton } from "./menu";
import { useState } from "react";
import Theme from "../theme/theme";
import { Link } from "react-scroll";

interface PropsType {
  onScroll: boolean;
}
export default function NavBar({ onScroll }: PropsType) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      <div
        className={`flex justify-between  py-5 max-lg:py-2 relative dark:text-white ${
          onScroll ? "text-black" : "text-white"
        } `}
      >
        <div className="flex-1 flex items-center">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <p className=" font-medium text-[40px] max-lg:text-[30px] max-lg:text-black dark:text-white">
              EazyDev
            </p>
          </Link>
        </div>

        <div className="flex gap-x-8 justify-between items-center text-xl font-medium max-lg:hidden">
          <div className="cursor-pointer">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeStyle={{ color: "#fb503b" }}
            >
              <p>Home</p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <p>
              {" "}
              <Link
                to="about"
                activeStyle={{ color: "#fb503b" }}
                spy={true}
                smooth={true}
                offset={-600}
                duration={500}
              >
                About
              </Link>
            </p>
          </div>
          <div className="cursor-pointer">
            <p>Portfolio</p>
          </div>
          <div className="cursor-pointer">
            <p>
              {" "}
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
                activeStyle={{ color: "#fb503b" }}
              >
                Experience
              </Link>{" "}
            </p>
          </div>
          <div className="cursor-pointer">
            <p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                activeStyle={{ color: "#fb503b" }}
              >
                Contact
              </Link>
            </p>
          </div>

          <div className="bg-[#fb503b] py-2 px-5 rounded-full text-white">
            <p>Download CV</p>
          </div>
          <div>
            <Theme onScroll={onScroll} />
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center ">
          <MenuButton
            onTap={setOpenMenu}
            onClick={setIsMenuOpen}
            onOpen={isMenuOpen}
          />
          <div className="ml-5 flex items-center">
            <Theme onScroll={onScroll} />
          </div>
        </div>

        {/* menuNavbar */}
      </div>
      {openMenu && (
        <div className="">
          <div className="flex flex-col gap-y-5 text-xl font-medium border-t-[1px] py-5 mx-[-40px] px-10 menu-drawer dark:text-white">
            <div className="cursor-pointer">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setOpenMenu(false), setIsMenuOpen(false);
                }}
              >
                <p>Home</p>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-600}
                duration={500}
                onClick={() => {
                  setOpenMenu(false), setIsMenuOpen(false);
                }}
              >
                About
              </Link>
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>Portfolio</p>
            </div>
            <div className="cursor-pointer">
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
                onClick={() => {
                  setOpenMenu(false), setIsMenuOpen(false);
                }}
              >
                Experience
              </Link>{" "}
            </div>
            <div
              onClick={() => {
                setOpenMenu(false), setIsMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              <p className={``}>
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => {
                    setOpenMenu(false), setIsMenuOpen(false);
                  }}
                >
                  Contact
                </Link>
              </p>
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
