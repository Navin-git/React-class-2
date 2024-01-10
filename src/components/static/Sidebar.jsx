import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed bg-white h-screen top-0 overflow-hidden duration-200 left-0 z-10 ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      <ul className="flex flex-col justify-center h-full items-center gap-4 text-gray-700 font-medium">
        <li className="cursor-pointer">home</li>
        <li className="cursor-pointer">work</li>
        <li className="cursor-pointer">project</li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer">contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
