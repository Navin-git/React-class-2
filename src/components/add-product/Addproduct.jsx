import React, { useState } from "react";
import Title from "../common/Title";
import Button from "../common/Button";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="mt-[40px]">
      <Title title={"Add Product"} />
      <div className="grid grid-cols-2 gap-6 px-4 py-8">
        <div className="productInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              console.log(e);
              setName(e.target.value);
            }}
          />
        </div>
        <div className="productInput">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => {
              console.log(e);
              setCategory(e.target.value);
            }}
            id="Category"
          />
        </div>
        <div className="productInput col-span-2">
          <label htmlFor="Exp">Exp Date</label>
          <input type="text" id="Exp" />
        </div>
        <div className="productInput col-span-2">
          <label htmlFor="Rate">Rate</label>
          <input type="text" id="Rate" />
        </div>
        <div className="productInput">
          <label htmlFor="Re-order">Re-order Level</label>
          <input type="text" id="Re-order" />
        </div>
        <div className="productInput">
          <label htmlFor="Qty">Qty</label>
          <input type="text" id="Qty" />
        </div>
        <Button title={"Submit"} type="submit" className="col-span-2" />
      </div>
    </form>
  );
};

export default Addproduct;
