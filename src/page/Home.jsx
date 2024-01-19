import React, { useState } from "react";
import Navbar from "../components/static/Navbar";
import Sidebar from "../components/static/Sidebar";
import ProductList from "../components/product/ProductList";
import Addproduct from "../components/add-product/Addproduct";
import Footer from "../components/static/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <section className="py-10 px-[5%]">
        <ProductList />
        {/* <Counter /> */}
        <Addproduct />

        {/* <div className="productInput">
      <label htmlFor="name">name</label>
      <input
        type="text"
        value={name}
        id="name"
        onChange={(e) => {
          setName(e?.target?.value);
        }}
      />
    </div>
    <div className="productInput">
      <label htmlFor="email">email</label>
      <input
        type="email"
        value={email}
        id="email"
        onChange={(e) => {
          setEmail(e?.target?.value);
        }}
      />
    </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Home;
