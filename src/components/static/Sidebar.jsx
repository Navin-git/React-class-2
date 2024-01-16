import React from "react";
import { navList } from "./Navbar";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed bg-white h-screen top-0 overflow-hidden duration-200 left-0 z-10 ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      <ul className="flex flex-col justify-center h-full items-center gap-4 text-gray-700 font-medium">
        {navList.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer">
              {item?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
