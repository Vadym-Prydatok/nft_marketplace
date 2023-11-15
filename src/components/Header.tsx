import classNames from "classnames";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "header ul li",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".logo",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" },
    );
    gsap.fromTo(
      ".menu-btn",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power2.out" },
    );
  }, []);

  return (
    <header>
      <Menu hasMenu={isMenuOpen} setMenu={setIsMenuOpen} />
      <div className="container">
        <div className="h-[54px] flex items-center xl:h-[100px]">
          <nav className="flex justify-between items-center w-full leading-6 font-[WorkSansSemiBold] font-semibold">
            <div className="logo">
              <a
                href="#"
                className="flex items-center gap-3 font-[SpaceMonoBold] font-bold hover:text-action text-[22px] duration-300 transition-colors"
              >
                <img src="img/svg/logo.svg" alt="logo" />
                <span>NFT Marketplace</span>
              </a>
            </div>

            <ul className="hidden xl:flex gap-[60px] items-center">
              <li className="hover:text-action">
                <a href="#collection" className="duration-300 transition-colors">
                  Marketplace
                </a>
              </li>
              <li className="hover:text-action">
                <a href="#rankings" className="duration-300 transition-colors">
                  Rankings
                </a>
              </li>
              <li className="hover:text-action">
                <a href="#wallet" className="duration-300 transition-colors">
                  Connect a wallet
                </a>
              </li>
              <li>
                <button className="rounded-[20px] bg-action w-[152px] h-[60px] border-action border-2 hover:bg-main flex items-center justify-center gap-3 duration-300 ">
                  <img src="img/svg/user.svg" alt="user" />
                  Sign Up
                </button>
              </li>
            </ul>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={classNames("xl:hidden menu-btn", {
                active: isMenuOpen,
              })}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
