import React, { useState } from "react";
import Navbar from "../components/static/Navbar";
import Sidebar from "../components/static/Sidebar";
import ProductList from "../components/product/ProductList";
import Addproduct from "../components/add-product/Addproduct";
import Footer from "../components/static/Footer";
import PostList from "../components/Post";

const Home = () => {
  return (
    <>
      <section className="py-10 px-[5%]">
        {/* <ProductList /> */}
        <PostList />
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
    </>
  );
};

export default Home;
