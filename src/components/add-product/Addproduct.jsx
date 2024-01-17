import React, { useState } from "react";
import Title from "../common/Title";
import Button from "../common/Button";

const Addproduct = () => {
  const [inputData, setInputData] = useState({
    name: "",
    Category: "",
    exp: "",
    rate: "",
    ["Re-order"]: "",
    Qty: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <form onSubmit={handelSubmit} className="mt-[40px]">
      <Title title={"Add Product"} />
      <div className="grid grid-cols-2 gap-6 px-4 py-8">
        <div className="productInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.name}
            name="name"
            id="name"
          />
        </div>
        <div className="productInput">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.Category}
            name="Category"
            id="Category"
          />
        </div>
        <div className="productInput col-span-2">
          <label htmlFor="Exp">Exp Date</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.exp}
            name="exp"
            id="Exp"
          />
        </div>
        <div className="productInput col-span-2">
          <label htmlFor="Rate">Rate</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.rate}
            name="rate"
            id="Rate"
          />
        </div>
        <div className="productInput">
          <label htmlFor="Re-order">Re-order Level</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData["Re-order"]}
            name="Re-order"
            id="Re-order"
          />
        </div>
        <div className="productInput">
          <label htmlFor="Qty">Qty</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.Qty}
            name="Qty"
            id="Qty"
          />
        </div>
        <Button title={"Submit"} type="submit" className="col-span-2" />
      </div>
    </form>
  );
};

export default Addproduct;
