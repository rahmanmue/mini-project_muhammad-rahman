import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Product, Transaksi, AddProduct } from "./page/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produk" element={<Product />} />
        <Route path="/produk/tambah" element={<AddProduct />} />
        <Route path="/transaksi" element={<Transaksi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
