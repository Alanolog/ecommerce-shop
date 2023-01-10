import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
import { useContext } from "../components";
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
}

export const Product: React.FC<IProps> = ({ item }) => {
  const router = useRouter();
  const { setCartItemsCount } = useContext();
  const handleShowProduct = () => {
    router.push(`/product/${item.id}`);
  };

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = storedCart.findIndex(
      (singleItem: singleProduct) => singleItem.item.id === item.id
    );
    if (itemIndex !== -1) {
      const amount = storedCart[itemIndex].amount;
      storedCart[itemIndex] = { item, amount: amount + 1 };
      localStorage.setItem("cart", JSON.stringify([...storedCart]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...storedCart, { item, amount: 1 }])
      );
      setCartItemsCount([...storedCart, { item, amount: 1 }].length);
    }
  };

  return (
    <div className=" flex-1 m-1 min-w-[280px]  h-80 flex items-center justify-center bg-white relative ">
      <img src={item.image} alt="Product" className=" h-3/4 bg-contain z-10" />
      <div className="w-full h-full z-20 absolute t-0 l-0  flex items-center justify-center">
        <div
          className=" w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center m-2 opacity-50 hover:opacity-100  hover:bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer"
          onClick={handleAddToCart}
        >
          <AiOutlineShoppingCart />
        </div>
        <div
          className=" w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center m-2 opacity-50 hover:opacity-100 hover:bg-slate-200 hover:scale-110 transition-all duration-500 cursor-pointer"
          onClick={handleShowProduct}
        >
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};
