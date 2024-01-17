import { useState } from "react";
import "./App.css";
import ProductList from "./components/product/ProductList";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import Sidebar from "./components/static/Sidebar";
import Counter from "./components/counter/Counter";
import Addproduct from "./components/add-product/Addproduct";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // console.log(email, name);
  return (
    <main>
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
    </main>
  );
};
export default App;
