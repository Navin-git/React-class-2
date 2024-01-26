import React from "react";
import { Link, useHref } from "react-router-dom";
import { SearchIcon } from "../../assets/icons";
export const navList = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "work",
    path: "/work",
  },
  {
    title: "project",
    path: "/project",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];
const Navbar = ({ setIsOpen }) => {
  const pathname = useHref();
  return (
    <nav className="bg-orange-100 sticky top-0 py-4 px-[5%] flex items-center gap-4 justify-between">
      <img
        src="https://1stwebdesigner.com/wp-content/uploads/2020/01/1stwebdesigner-logo-2020.png"
        alt=""
        className="h-10"
      />
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="py-1 px-8 rounded-full outline-none bg-white bg-opacity-70 text-lg text-red-500"
        />
        <SearchIcon className="absolute top-2 right-2 h-5 w-5 text-red-500" />
      </div>
      <ul className="sm:flex hidden justify-end items-center gap-4 text-gray-700 font-medium">
        {Array.isArray(navList) &&
          navList.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer">
                <Link
                  className={`${
                    pathname === item?.path ? "text-red-700" : "text-red-500"
                  }`}
                  to={item?.path}
                >
                  {item?.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <button
        className="block sm:hidden"
        onClick={() => {
          setIsOpen((pre) => !pre);
        }}
      >
        menu
      </button>
    </nav>
  );
};

export default Navbar;
