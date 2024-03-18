import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const {mode} = useSelector((state) => state);
  const [cat,setcat]=useState("all");

  

  return (
    <div className={mode.light?  ' min-h-screen bg-white':'w-screen min-h-screen bg-black'}>
      <div className="bg-slate-900 fixed top-0 z-[100] w-screen ">
        <Navbar   />
      </div>

      <div>
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;