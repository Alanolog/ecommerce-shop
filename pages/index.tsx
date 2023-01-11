import React from "react";
import { Slider, Categories, Products } from "../components";
import axios from "axios";

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
  categories: string[];
}

const Home: React.FC<IProps> = ({ products, categories }) => {
  return (
    <main>
      <Slider />
      <Categories categories={categories} />
      <Products products={products.slice(0, 8)} />
    </main>
  );
};
export default Home;

export async function getStaticProps() {
  const products = await axios.get("https://fakestoreapi.com/products");
  const categories = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return {
    props: { products: products.data, categories: categories.data }, // will be passed to the page component as props
  };
}
