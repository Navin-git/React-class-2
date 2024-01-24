import React, { useEffect, useMemo, useState } from "react";
import Card from "../common/Card";
import Title from "../common/Title";

export const plist = [
  {
    title: "nabin",
    dec: "this is nabin",
    id: 1,
    price: 200,
    qty: "4",
    image:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  },
  {
    title: "jubin",
    dec: "this is jubin",
    id: 2,
    price: 400,
    qty: 8,
    image:
      "https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580",
  },
  {
    title: "Saroj",
    dec: "this is saroj",
    id: 3,
    price: 100,
    qty: 3,
    image:
      "https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU=",
  },
  {
    title: "Suraj",
    dec: "this is Suraj",
    id: 4,
    price: 300,
    qty: 400,
  },
];

const ProductList = () => {
  const [list, setList] = useState(plist);
  const [show, setShow] = useState("");
  const [view, setView] = useState("grid");

  // const [totalqty, setTotalQty] = useState(0);
  // useEffect(() => {
  //   setTotalQty(list.reduce((acc, item) => acc + item?.qty, 0));
  // }, [list]);
  const [mapData, setMapData] = useState([]);

  const totalqty = useMemo(() => {
    return mapData.reduce((acc, item) => acc + parseInt(item?.qty), 0);
  }, [mapData]);

  const totalAmount = useMemo(() => {
    return mapData.reduce((acc, item) => acc + item?.price * item?.qty, 0);
  }, [mapData]);

  const filterList = useMemo(() => {
    return list.filter((item) => item?.price > 200);
  }, [mapData]);

  useEffect(() => {
    setMapData(show === "high" ? filterList : list);
  }, [list, show]);

  // useEffect(() => {
  //   alert("hello");
  // }, [list]);
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <Title title={"Product List"} />
        <div className="flex gap-4">
          <button
            onClick={() => {
              setList((pre) => {
                return [
                  ...pre,
                  {
                    title: "Suraj",
                    dec: "this is Suraj",
                    id: list?.length + 1,
                    price: 300,
                    qty: 400,
                  },
                ];
              });
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              setShow("high");
            }}
          >
            high price
          </button>
          <button
            onClick={() => {
              setShow("all");
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setView("grid");
            }}
          >
            Grid
          </button>
          <button
            onClick={() => {
              setView("table");
            }}
          >
            Table
          </button>
        </div>
      </div>
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {mapData.map((item, index) => {
            return (
              <Card
                key={index}
                dec={item?.dec}
                pic={item?.image}
                title={item?.title}
                rate={item?.price}
                qty={item?.qty}
                id={item?.id}
              />
            );
          })}
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>sn</th>
              <th>name</th>
              <th>qty</th>
              <th>price</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {mapData?.map((item, index) => {
              return (
                <tr className="even:bg-slate-200" key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.qty}</td>
                  <td>{item?.price}</td>
                  <td>{item?.qty * item?.price}</td>
                </tr>
              );
            })}
          </tbody>
          <table></table>
        </table>
      )}
      <div className="flex flex-col items-end">
        <p>total qty : {totalqty}</p>
        <p>total Amount : {totalAmount}</p>
      </div>
    </div>
  );
};

export default ProductList;
