import { useEffect } from "react";
import { creators } from "../data/creators";
import { Creator } from "./Creator";
// import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css";
import Aos from "aos";

export const TopCreators = () => {
    useEffect(() => {
    Aos.init();

  }, []);
  
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div
          className="grid grid-rows-[repeat(3,_minmax(auto,_auto))] gap-y-10 xl:gap-y-[60px]
        md:grid-cols-[repeat(2,_minmax(auto,_auto))] md:grid-rows-[repeat(2,_minmax(auto,_auto))]"
        >
          <div className="row-start-1">
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px]">
              Top creators
            </h1>
            <p className="xl:text-[28px] xl:leading-[160%]">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>

          <div className="row-start-3 md:row-start-1 md:col-start-2 flex justify-end items-end">
            <button
              className="font-[WorkSansSemiBold] gap-x-3 w-full h-[60px] rounded-[20px] border-action border-2 hover:bg-main
              flex items-center justify-center bg-action font-semibold md:w-[247px]"
            >
              <img src="img/svg/rocket.svg" alt="rocket" />
              View Rankings
            </button>
          </div>

          <div className="row-start-2 md:col-start-1 md:col-end-3">
            <ul className="grid w-full gap-y-5 md:gap-8 grid-rows-5 md:grid-rows-3 md:grid-cols-2 xl:grid-cols-4">
              {creators.map((creator) => {
                return (
                  <li
                    data-aos="fade-up"
                    // data-aos-delay="3000"
                    data-aos-duration={`${+creator.rate * 100}`}
                    key={creator.rate}
                    className="hidden cursor-pointer hover:shadow-md w-full [&:nth-child(-n+5)]:flex md:[&:nth-child(-n+6)]:flex xl:[&:nth-child(-n+12)]:flex rounded-[20px]"
                  >
                    <Creator creator={creator} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
