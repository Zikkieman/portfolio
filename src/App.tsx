import { useEffect } from "react";
import LandingPage from "./pages/portfolio";

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const mover = document.querySelector("#mover") as HTMLElement;
      if (mover) {
        mover.style.top = `${clientY - 20}px`;
        mover.style.left = `${clientX - 20}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="relative">
      {/* <div
        className="absolute border-2 border-[#fb503b] w-[40px] h-[40px] rounded-full transition justify-center items-center flex z-20"
        id="mover"
      >
        <div className="w-[5px] h-[5px] bg-[#fb503b] rounded-full"></div>
      </div> */}
      <LandingPage />
    </div>
  );
}

export default App;
