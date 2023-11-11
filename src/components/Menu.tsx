import classNames from "classnames";
import { FC } from "react";

interface MenuProps {
  hasMenu: boolean;
}

export const Menu: FC<MenuProps> = ({ hasMenu }) => {
  return (
    <ul
      className={classNames(
        "absolute -translate-x-full top-0 left-0 w-full h-full text-[24px] bg-main p-6 flex flex-col items-center gap-12 xl:hidden",
        { "translate-x-0": hasMenu }
      )}
    >
      <li className="hover:text-action">
        <a href="/">Marketplace</a>
      </li>
      <li className="hover:text-action">
        <a href="/">Rankings</a>
      </li>
      <li className="hover:text-action">
        <a href="/">Connect a wallet</a>
      </li>
      <li>
        <button className="bg-action px-8 py-1 rounded-xl h-12 border border-action hover:bg-main">Sign Up</button>
      </li>
    </ul>
  );
};
