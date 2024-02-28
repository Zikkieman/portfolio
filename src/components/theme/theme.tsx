import { useEffect } from "react";
import { GoSun } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { darkTheme, lightTheme } from "../../redux/features/themeSlice";

interface PropsType {
  onScroll: boolean;
}

const Theme = ({ onScroll }: PropsType) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const setLightTheme = () => {
    dispatch(darkTheme("light"));
  };

  const setDarkTheme = () => {
    dispatch(lightTheme("dark"));
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);

  console.log(theme);

  return (
    <span
      onClick={theme === "light" ? setDarkTheme : setLightTheme}
      className={`h-10 w-10 border max-lg:bg-black border-white rounded-full transition-all duration-500  flex justify-center items-center ${
        onScroll && "bg-black "
      }`}
    >
      <div className="w-8 h-8 text-white max-lg:text- flex justify-center items-center transition-all duration-500">
        {theme === "light" ? <IoMoon /> : <GoSun />}{" "}
      </div>
    </span>
  );
};

export default Theme;
