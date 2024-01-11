import React from "react";

const Navbar = ({ setIsOpen }) => {
  return (
    <nav className="bg-orange-100 py-4 px-[5%] flex items-center gap-4 justify-between">
      <img
        src="https://1stwebdesigner.com/wp-content/uploads/2020/01/1stwebdesigner-logo-2020.png"
        alt=""
        className="h-10"
      />
      <ul className="flex justify-end items-center gap-4 text-gray-700 font-medium">
        <li className="cursor-pointer">home</li>
        <li className="cursor-pointer">work</li>
        <li className="cursor-pointer">project</li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer">contact</li>
        <li className="cursor-pointer">
          <button
            onClick={() => {
              setIsOpen((pre) => !pre);
            }}
          >
            menu
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
