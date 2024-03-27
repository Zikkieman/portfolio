import kleanup from "../../assets/images/kleanup.png";
export default function Progress() {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 justify-center">
      <div className="max-w-[500x]   border-2 overflow-hidden border-[#fb503b] rounded-lg shadow-md">
        <a
          href="https://klean-up-main.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kleanup} alt="verido icon" className="h-[25x] w-ful" />
          <p className="font-normal text-[18px] mt-5 dark:text-[#aaaaba] text-[#54545f] mb-5">
            Verido automatically generates profitable selling prices for each
            product and service.
          </p>
        </a>
      </div>
    </div>
  );
}
