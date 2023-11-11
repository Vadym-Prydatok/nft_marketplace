// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { CardAnimals } from "./CardAnimals";
import { CardMushrooms } from "./CardMushrooms";
import classNames from "classnames";
import { CardMachines } from "./CardMachines";

export const Collection = () => {
  const [card, setCard] = useState(0);
  const [timer, setTimer] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [hasControlButton, setControlButton] = useState(false);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  // useEffect(() => {
  //   AOS.refresh();
  // }, [card]);

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
    setCard((prev) => {
      if (prev === 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prevCard = () => {
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
    <section className="py-10 md:py-20" id="collection">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-10 self-start">
            <h1 className="font-[WorkSansSemiBold] text-[28px] font-semibold xl:text-[38px] xl:leading-[120%] mb-[10px]">
              Trending Collection
            </h1>
            <p className="xl:text-[28px] xl:leading-[160%]">
              Checkout our weekly updated trending collection.
            </p>
          </div>

          <ul
            className="relative flex gap-x-[30px] md:justify-evenly md:w-full xl:justify-between"
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
