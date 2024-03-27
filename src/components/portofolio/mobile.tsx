import verido from "../../assets/images/verido.png";
import chowMobile from "../../assets/images/chow-mobile.png";

export default function Mobile() {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 justify-center">
      <div className="max-w-[500x]   border-2 overflow-hidden border-[#fb503b] rounded-lg shadow-md">
        <a
          href="https://play.google.com/store/apps/details?id=app.verido.app&hl=en&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={verido} alt="verido icon" className="h-[25x] w-ful" />
          <p className="font-normal text-[18px] mt-5 dark:text-[#aaaaba] text-[#54545f] mb-5">
            Verido automatically generates profitable selling prices for each
            product and service.
          </p>
        </a>
      </div>
      <div className="rounded-lg border-2 overflow-hidden border-[#fb503b] shadow-md">
        <a
          href="https://play.google.com/store/apps/details?id=com.chowcentral&hl=en&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={chowMobile} alt="chow icon" className="h-[250x] w-ful" />
          <p className="font-normal text-[18px] mt-5 dark:text-[#aaaaba] text-[#54545f] mb-5">
            {" "}
            A mobile app makes a variety of delicious food available at the
            user's fingertips{" "}
          </p>
        </a>
      </div>
    </div>
  );
}
