import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./Header/Header";
import AllPage from "./pages/AllPage/AllPage";
import TechPage from "./pages/Tech/Tech";
import ClothesPage from "./pages/Clothes/ClothesPage";
import ProductDetailsPage from "./pages/PDP/ProductDetailsPage";
import Cart from "./pages/ProductCart/ProductCart";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="">
        <Header />
      </div>
      <div>
        <Routes>
          <Route strict exact path="/" element={<AllPage />} />
          <Route strict exact path="/tech" element={<TechPage />} />
          <Route strict exact path="/clothes" element={<ClothesPage />} />
          <Route strict exact path="/:id" element={<ProductDetailsPage />} />
          <Route strict exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
