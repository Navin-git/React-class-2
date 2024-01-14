import React, { useState } from "react";
import Card from "../common/Card";

const ProductList = () => {
  const [list, setList] = useState([
    {
      title: "nabin",
      dec: "this is nabin",
      id: 1,
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      title: "jubin",
      dec: "this is jubin",
      id: 1,
      image:
        "https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580",
    },
    {
      title: "Saroj",
      dec: "this is saroj",
      id: 1,
      image:
        "https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU=",
    },
    {
      title: "Suraj",
      dec: "this is Suraj",
      id: 1,
    },
  ]);
  return (
    <div className="space-y-10">
      <div className=" w-fit mx-auto">
        <h1 className="text-2xl font-semibold text-red-500">Product List</h1>
        <div className="h-1 w-full bg-red-500"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.isArray(list) &&
          list.map((item, index) => {
            return (
              <Card
                key={index}
                dec={item?.dec}
                pic={item?.image}
                title={item?.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
