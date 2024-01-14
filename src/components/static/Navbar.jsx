import React from "react";

const Navbar = ({ setIsOpen }) => {
  const navList = [
    {
      title: "home",
      path: "/home",
    },
    {
      title: "work",
      path: "/work",
    },
    {
      title: "projects",
      path: "/projects",
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
  return (
    <nav className="bg-orange-100 sticky top-0 py-4 px-[5%] flex items-center gap-4 justify-between">
      <img
        src="https://1stwebdesigner.com/wp-content/uploads/2020/01/1stwebdesigner-logo-2020.png"
        alt=""
        className="h-10"
      />
      <ul className="sm:flex hidden justify-end items-center gap-4 text-gray-700 font-medium">
        {Array.isArray(navList) &&
          navList.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer text-red-500">
                <a href={item?.path}>{item?.title}</a>
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
