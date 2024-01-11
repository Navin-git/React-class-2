import { useState } from "react";
import "./App.css";
import ProductList from "./components/product/ProductList";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import Sidebar from "./components/static/Sidebar";
import Counter from "./components/counter/Counter";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      <section className="py-10 px-[5%]">
        <ProductList />
        <Counter />
      </section>
      <Footer />
    </main>
  );
};
export default App;
