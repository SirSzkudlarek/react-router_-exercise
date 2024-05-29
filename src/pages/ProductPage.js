import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
  let { id } = useParams();
  return (
    <>
      <div>Product page</div>
      <Product id={id} />
      <Link to="/products">Return to product list.</Link>
    </>
  );
};

export default ProductPage;
