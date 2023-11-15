import classNames from "classnames";
import { FC } from "react";

interface MenuProps {
  hasMenu: boolean;
  setMenu: (value: boolean) => void;
}

export const Menu: FC<MenuProps> = ({ hasMenu, setMenu }) => {
  return (
    <ul
      className={classNames(
        "fixed -translate-x-full top-0 left-0 w-full h-[100vh] text-[24px] bg-main p-6 flex flex-col items-center gap-12 xl:hidden duration-300 opacity-100 z-10 overflow-hidden",
        { "translate-x-0": hasMenu }
      )}
    >
      <li className="hover:text-action">
        <a href="#collection" onClick={() => setMenu(false)}>Marketplace</a>
      </li>
      <li className="hover:text-action">
        <a href="#rankings" onClick={() => setMenu(false)}>Rankings</a>
      </li>
      <li className="hover:text-action">
        <a href="#wallet" onClick={() => setMenu(false)}>Connect a wallet</a>
      </li>
      <li>
        <button className="bg-action px-8 py-1 rounded-xl h-12 border border-action hover:bg-main">Sign Up</button>
      </li>
    </ul>
  );
};
