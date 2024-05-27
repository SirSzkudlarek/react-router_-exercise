import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" exact="true" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Page;
