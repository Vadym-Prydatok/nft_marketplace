import classNames from "classnames";
import { FC } from "react";

interface MenuProps {
  hasMenu: boolean;
}

export const Menu: FC<MenuProps> = ({ hasMenu }) => {
  return (
    <ul
      className={classNames(
        "absolute -translate-x-full top-0 left-0 w-full bg-main p-6 flex flex-col gap-2 xl:hidden",
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
        <button className="bg-action px-4 py-1 rounded-xl">Sign Up</button>
      </li>
    </ul>
  );
};
