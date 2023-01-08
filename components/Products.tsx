import React from "react";
import { Product } from "./";

interface IProps {
  products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }[];
}

export const Products: React.FC<IProps> = ({ products }) => {
  return (
    <div className=" p-5 flex flex-wrap justify-between">
      {products.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
};
