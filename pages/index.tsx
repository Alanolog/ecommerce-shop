import React from "react";
import { Slider, Categories, Newsletter, Products } from "../components";

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
      <Newsletter />
    </main>
  );
};
export default Home;

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());

  return {
    props: { products, categories }, // will be passed to the page component as props
  };
}
