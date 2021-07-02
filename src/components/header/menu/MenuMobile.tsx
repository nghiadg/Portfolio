import * as React from "react";
import { IconBars, IconClose } from "components/Icon";
import { useState } from "react";

const MenuMobile: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div>
      <div className="text-lg sm:hidden" onClick={() => setIsShowMenu(true)}>
        <IconBars />
      </div>
      {isShowMenu && (
        <div>
          <ul className="flex flex-col items-center justify-center absolute top-0 left-0 h-screen w-screen bg-dark">
            <li className="py-2 cursor-pointer text-primary font-bold">
              <a>Home</a>
            </li>
            <li className="py-2 font-medium cursor-pointer hover:text-primary">
              <a>Experience</a>
            </li>
            <li className="py-2 font-medium cursor-pointer hover:text-primary">
              <a>Project</a>
            </li>
            <li className="py-2 font-medium cursor-pointer hover:text-primary">
              <a>Contact</a>
            </li>
          </ul>
          <div
            className="absolute top-3 right-2 text-xl"
            onClick={() => setIsShowMenu(false)}
          >
            <IconClose />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
