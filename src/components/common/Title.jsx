import React from "react";

const Title = ({ title, className, bdClass }) => {
  return (
    <div className={`w-fit mx-auto text-red-500 ${className}`}>
      <h1 className="text-2xl font-semibold ">{title}</h1>
      <div className={`h-1 w-full bg-red-500 ${bdClass}`}></div>
    </div>
  );
};

export default Title;
