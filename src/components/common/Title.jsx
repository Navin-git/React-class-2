import React from "react";

const Title = ({ title }) => {
  return (
    <div className=" w-fit mx-auto">
      <h1 className="text-2xl font-semibold text-red-500">{title}</h1>
      <div className="h-1 w-full bg-red-500"></div>
    </div>
  );
};

export default Title;
