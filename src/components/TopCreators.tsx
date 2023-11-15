import { useEffect } from "react";
import { creators } from "../data/creators";
import { Creator } from "./Creator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const TopCreators = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".creators-list li",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".creators-list",
          start: "top 80%",
        },
      },
    );
  });

  const handleClick = (id: number) => {
    gsap.fromTo(
      `.creators-list li:nth-child(${id}) a div`,
      { duration: 1, opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
    );
  };

  const buttonClick = () => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.out",
      },
    });

    tl.fromTo(
      ".rang-button img",
      { opacity: 1, x: 0, y: 0 },
      { opacity: 0, x: 20, y: -40, duration: 1, scale: 1.5 },
    )
      .to(".rang-button img", {
        opacity: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.1,
      })
      .to(".rang-button img", { opacity: 1 });
  };

  return (
    <section className="py-10 md:py-20" id="rankings">
      <div className="container">
        <div
          className="grid grid-rows-[repeat(3,_minmax(auto,_auto))] gap-y-10 xl:gap-y-[60px]
        md:grid-cols-[repeat(2,_minmax(auto,_auto))] md:grid-rows-[repeat(2,_minmax(auto,_auto))]"
        >
          <div className="row-start-1 title-box">
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px]">
              Top creators
            </h1>
            <p className="xl:text-[28px] xl:leading-[160%]">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>

          <div className="row-start-3 md:row-start-1 md:col-start-2 flex justify-end items-end">
            <button
              onClick={buttonClick}
              className="font-[WorkSansSemiBold] gap-x-3 w-full h-[60px] rounded-[20px] border-action border-2 hover:bg-main
              flex items-center justify-center bg-action font-semibold md:w-[247px] duration-300 rang-button"
            >
              <img src="img/svg/rocket.svg" alt="rocket" />
              View Rankings
            </button>
          </div>

          <div className="row-start-2 md:col-start-1 md:col-end-3">
            <ul className="grid w-full gap-y-5 md:gap-8 grid-rows-5 md:grid-rows-3 md:grid-cols-2 xl:grid-cols-4 creators-list">
              {creators.map((creator) => {
                return (
                  <li
                    key={creator.rate}
                    onClick={() => handleClick(+creator.rate)}
                    className="hidden cursor-pointer hover:shadow-md w-full duration-300 transition-shadow [&:nth-child(-n+5)]:flex md:[&:nth-child(-n+6)]:flex xl:[&:nth-child(-n+12)]:flex rounded-[20px] "
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
