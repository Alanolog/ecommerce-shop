import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";
import { useContext } from "../../components";
import axios from "axios";

type singleProduct = {
  item: {
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
  };
  amount: number;
};

interface IProps {
  product: {
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
  };
}

const Product: React.FC<IProps> = ({ product }) => {
  const filterSizeClasses = " ml-2 p-1";

  const [counter, setCounter] = React.useState(1);
  const { setCartItemsCount } = useContext();

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = storedCart.findIndex(
      (singleItem: singleProduct) => singleItem.item.id === product.id
    );
    if (itemIndex !== -1) {
      const amount = storedCart[itemIndex].amount;
      storedCart[itemIndex] = { item: product, amount: amount + counter };
      localStorage.setItem("cart", JSON.stringify([...storedCart]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...storedCart, { item: product, amount: 1 }])
      );
      setCartItemsCount([...storedCart, { item: product, amount: 1 }].length);
    }
  };

  return (
    <main>
      <div className=" p-12 flex lg:flex-col sm:p-1">
        <h2 className=" hidden font-extralight lg:text-5xl sm:text-2xl  lg:block my-5">
          {product.title}
        </h2>
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className=" w-full h-5/6 object-contain"
          />
        </div>
        <div className=" flex-1 px-12 sm:px-1 lg:flex lg:flex-col lg:items-center">
          <h2 className=" font-extralight text-7xl lg:hidden">
            {product.title}
          </h2>
          <p className="my-5">{product.description}</p>
          <span className=" font-thin text-4xl">{product.price} USD</span>
          <p className=" font-extralight text-xl my-5">
            Rating: {product.rating.rate}/5
          </p>
          <div className="flex justify-between w-1/2 my-8 lg:justify-center">
            <div className=" flex items-center">
              <span className=" text-xl font-extralight">Size</span>
              <select>
                <option className={filterSizeClasses}>XS</option>
                <option className={filterSizeClasses}>S</option>
                <option className={filterSizeClasses}>M</option>
                <option className={filterSizeClasses}>L</option>
                <option className={filterSizeClasses}>XL</option>
              </select>
            </div>
          </div>
          <div className=" flex items-center w-1/2 justify-between lg:flex-col lg:gap-5">
            <div className=" flex items-center font-bold">
              <MdRemoveCircleOutline
                className=" cursor-pointer"
                onClick={() => {
                  if (counter - 1 !== 0) setCounter(counter - 1);
                }}
              />
              <span className=" w-8 h-8 rounded-xl border border-teal-600 flex items-center justify-center mx-1">
                {counter}
              </span>
              <RiAddCircleLine
                className="cursor-pointer"
                onClick={() => {
                  if (counter < 10) setCounter(counter + 1);
                }}
              />
            </div>
            <button
              className=" uppercase p-4 border-2 border-teal-600 bg-white cursor-pointer rounded-sm hover:bg-slate-100 transition-all "
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Product;

export async function getServerSideProps(context: {
  params: {
    id: string;
  };
}) {
  const product = await axios.get(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  return {
    props: { product: product.data }, // will be passed to the page component as props
  };
}
