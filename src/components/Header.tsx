import classNames from "classnames";
import { useState } from "react";
import { Menu } from "./Menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="h-[54px] flex items-center xl:h-[100px]">
          <nav className="flex justify-between items-center w-full leading-6 font-[WorkSansSemiBold] font-semibold">
            <div>
              <a
                href="#"
                className="flex items-center gap-3 font-[SpaceMonoBold] font-bold hover:text-action text-[22px]"
              >
                <img src="img/svg/logo.svg" alt="logo" />
                <span>NFT Marketplace</span>
              </a>
            </div>
            <Menu hasMenu={isMenuOpen} />
            <ul className="hidden xl:flex gap-[60px] items-center">
              <li className="hover:text-action">
                <a href="#collection">Marketplace</a>
              </li>
              <li className="hover:text-action">
                <a href="#rankings">Rankings</a>
              </li>
              <li className="hover:text-action">
                <a href="#wallet">Connect a wallet</a>
              </li>
              <li>
                <button className="rounded-[20px] bg-action w-[152px] h-[60px] border-action border-2 hover:bg-main flex items-center justify-center gap-3">
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
