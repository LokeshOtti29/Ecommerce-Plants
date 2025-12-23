import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Login from "./components/Login";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
