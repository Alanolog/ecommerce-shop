import React from "react";
import { Slider, Categories, Newsletter, Products } from "../components";

const Home: React.FC = () => {
  return (
    <main>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </main>
  );
};
export default Home;
