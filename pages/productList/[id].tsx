import React from "react";
import { Products } from "../../components";
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
}

const ProductList: React.FC<IProps> = ({ products }) => {
  const optionClasses = " font-light sm:text-sm";
  const selectClasses = " outline-none sm:text-sm";
  const [currProducts, setCurrProducts] = React.useState(products);

  const handlePriceChoose = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priceRange = e.target.value;
    if (priceRange === "0-10") {
      setCurrProducts(products.filter((product) => product.price <= 10));
    } else if (priceRange === "10-25") {
      setCurrProducts(
        products.filter((product) => product.price >= 10 && product.price <= 25)
      );
    } else if (priceRange === "25+") {
      setCurrProducts(products.filter((product) => product.price > 25));
    }
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortCondition = e.target.value;
    if (sortCondition === "rating") {
      const sorted = [
        ...products.sort((a, b) => a.rating.rate - b.rating.rate),
      ];
      setCurrProducts(sorted);
    } else if (sortCondition === "priceAsc") {
      const sorted = [...products.sort((a, b) => a.price - b.price)];
      setCurrProducts(sorted);
    } else if (sortCondition === "priceDesc") {
      const sorted = [...products.sort((a, b) => b.price - a.price)];
      setCurrProducts(sorted);
    }
  };

  React.useEffect(() => {}, [currProducts]);

  return (
    <main>
      <div className=" flex justify-between sm:flex-col">
        <div className="m-5 sm:flex sm:justify-between">
          <span className=" text-xl font-semibold mr-5 sm:text-sm">
            Filter Products:
          </span>
          <select
            className={selectClasses}
            defaultValue="choose"
            onChange={(e) => handlePriceChoose(e)}
          >
            <option disabled value="choose">
              Price
            </option>
            <option className={optionClasses} value="0-10">
              0-10USD
            </option>
            <option className={optionClasses} value="10-25">
              10-25USD
            </option>
            <option className={optionClasses} value="25+">
              25USD+
            </option>
          </select>
        </div>
        <div className="m-5 sm:flex sm:justify-between">
          <span className=" text-xl font-semibold mr-5 sm:text-sm">
            Sort Products:
          </span>
          <select
            className={selectClasses}
            defaultValue="rating"
            onChange={(e) => handleSort(e)}
          >
            <option value="rating">Rating</option>
            <option className={optionClasses} value="priceAsc">
              Price (ascending)
            </option>
            <option className={optionClasses} value="priceDesc">
              Price (descending)
            </option>
          </select>
        </div>
      </div>
      {currProducts && <Products products={currProducts} />}
    </main>
  );
};
export default ProductList;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: {
    id: string;
  };
}) {
  const category = context?.params?.id;
  const products = await axios.get(
    `https://fakestoreapi.com/products${
      category ? `/category/${category}` : ""
    }`
  );

  return {
    props: { products: products.data }, // will be passed to the page component as props
  };
}
