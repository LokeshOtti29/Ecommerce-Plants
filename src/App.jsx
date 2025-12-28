import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Categories from "./components/Categories";
import Payment from "./components/Payment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/account/Register" element={<Register />} />
          <Route path="categories/:categoryName" element={<Categories />} />
        </Route>
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
