import { useState } from "react";
import "./App.css";
import Routes from "./components/routs";

const App = () => {
  const [dark, setDark] = useState(false);
  console.log(dark);
  return (
    <main className={dark ? "dark" : ""}>
      <Routes setDark={setDark} />
    </main>
  );
};

export default App;
