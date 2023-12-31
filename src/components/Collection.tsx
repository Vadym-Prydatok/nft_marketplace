import { useEffect, useState } from "react";
import { CardAnimals } from "./CardAnimals";
import { CardMushrooms } from "./CardMushrooms";
import classNames from "classnames";
import { CardMachines } from "./CardMachines";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Collection = () => {
  const [card, setCard] = useState(0);
  const [timer, setTimer] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [hasControlButton, setControlButton] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (windowSize > 834) {
      gsap.fromTo(
        "#collection ul li",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#collection",
            start: "top 80%",
          },
        },
      );
    }
  }, [windowSize]);


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 834 && timer) {
      const interval = setInterval(() => {
        gsap.fromTo(
          "#collection ul li",
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );

        setCard((prev) => {
          if (prev === 2) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [windowSize, timer]);

  const nextCard = () => {
    gsap.fromTo(
      "#collection ul li",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    setCard((prev) => {
      if (prev === 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prevCard = () => {
    gsap.fromTo(
      "#collection ul li",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    setCard((prev) => {
      if (prev === 0) {
        return 2;
      } else {
        return prev - 1;
      }
    });
  };

  const handleMouseEnter = () => {
    setTimer(false);
    setControlButton(true);
  };

  const handleMouseLeave = () => {
    setTimer(true);
    setControlButton(false);
  };

  return (
    <section className="py-10 md:py-20" id="collection"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-10 self-start text-box"
           >
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px]">
              Trending Collection
            </h1>
            <p className="xl:text-[28px] xl:leading-[160%]">
              Checkout our weekly updated trending collection.
            </p>
          </div>

          <ul
            className="relative flex gap-x-[30px] md:justify-evenly md:w-full xl:justify-between cards-list"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li
              className={classNames(
                { block: card === 0, hidden: card !== 0 },
                "md:block"
              )}
            >
              <CardAnimals />
            </li>

            <li
              className={classNames(
                { block: card === 1, hidden: card !== 1 },
                "md:block"
              )}
            >
              <CardMushrooms />
            </li>

            <li
              className={classNames(
                { block: card === 2, hidden: card !== 2 },
                "md:hidden xl:block"
              )}
            >
              <CardMachines />
            </li>

            {hasControlButton && (
              <ul className="absolute top-[30%] flex w-full justify-between md:hidden">
                <li>
                  <button className="hover:border" onClick={prevCard}>
                    <img src="img/svg/arrowLeft.svg" alt="arrow" />
                  </button>
                </li>
                <li>
                  <button className="hover:border" onClick={nextCard}>
                    <img src="img/svg/arrowRight.svg" alt="arrow" />
                  </button>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
