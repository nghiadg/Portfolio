import * as React from "react";
import MenuMobile from "components/header/menu/MenuMobile";

const Menu: React.FC = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <ul className="flex items-center justify-center">
          <li className="px-2 cursor-pointer text-primary font-bold">
            <a>Home</a>
          </li>
          <li className="px-2 font-medium cursor-pointer hover:text-primary">
            <a>Experience</a>
          </li>
          <li className="px-2 font-medium cursor-pointer hover:text-primary">
            <a>Project</a>
          </li>
          <li className="px-2 font-medium cursor-pointer hover:text-primary">
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <MenuMobile />
    </div>
  );
};

export default Menu;
