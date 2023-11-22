import classNames from "classnames";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import gsap from "gsap";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      "header div ul li",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      "header div",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <header>
      <Menu hasMenu={isMenuOpen} setMenu={setIsMenuOpen} />
      <div className="container">
        <div className="flex h-[54px] items-center xl:h-[100px]">
          <nav className="flex w-full items-center justify-between font-[WorkSansSemiBold] font-semibold leading-6">
            <div className="logo">
              <a
                href="#"
                className="flex items-center gap-3 font-[SpaceMonoBold] text-[22px] font-bold transition-colors duration-300 hover:text-action"
              >
                <img src="img/svg/logo.svg" alt="logo" />
                <span>NFT Marketplace</span>
              </a>
            </div>

            <ul className="hidden items-center gap-[60px] xl:flex">
              <li className="hover:text-action">
                <a
                  href="#collection"
                  className="transition-colors duration-300"
                >
                  Marketplace
                </a>
              </li>
              <li className="hover:text-action">
                <a href="#rankings" className="transition-colors duration-300">
                  Rankings
                </a>
              </li>
              <li className="hover:text-action">
                <a href="#wallet" className="transition-colors duration-300">
                  Connect a wallet
                </a>
              </li>
              <li>
                <button className="flex h-[60px] w-[152px] items-center justify-center gap-3 rounded-[20px] border-2 border-action bg-action duration-300 hover:bg-main ">
                  <img src="img/svg/user.svg" alt="user" />
                  Sign Up
                </button>
              </li>
            </ul>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={classNames("menu-btn xl:hidden", {
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
