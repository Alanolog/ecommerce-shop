import React from "react";
import { popularItems } from "../mockData";
import { Product } from "./";

export const Products = () => {
  return (
    <div className=" p-5 flex flex-wrap justify-between">
      {popularItems.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
};
