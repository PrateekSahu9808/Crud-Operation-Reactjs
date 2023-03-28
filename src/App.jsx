import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Product from "./components/products/Product";
import PageNotFound from "./pages/PageNotFound";
import ProductDashboard from "./components/products/ProductDashboard";

import DefaultNestedRoute from "./components/products/DefaultNestedRoute";

const App = () => {
  return (
    <section id="mainContainer">
      <article>
        <Router>
          <Navbar />
          <ToastContainer theme="dark" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-dashboard" element={<ProductDashboard />}>
              <Route index element={<DefaultNestedRoute />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path=":id" element={<Product />} />
              <Route path="update-product/:id" element={<UpdateProduct />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </article>
    </section>
  );
};

export default App;
