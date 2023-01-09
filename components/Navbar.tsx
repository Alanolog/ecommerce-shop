import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  const [cartItemsCount, setCartItemsCount] = React.useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("storage", () => {
      setCartItemsCount(
        JSON.parse(localStorage.getItem("cart") || "[]").length
      );
    });
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCartItemsCount(
        JSON.parse(localStorage.getItem("cart") || "[]").length
      );
    }
  }, []);
  React.useEffect(() => {}, [cartItemsCount]);
  return (
    <div className=" h-16">
      <div className=" px-3 py-5 flex justify-between">
        <div className=" flex-1 flex items-center">
          <span className=" text-sm cursor-pointer">EN</span>
        </div>
        <div className=" flex-1 text-center ">
          <h1 className=" font-semibold">
            <a href="/">RANDOM.</a>
          </h1>
        </div>
        <div className=" flex-1  relative">
          <div className=" cursor-pointer mr-5">
            {cartItemsCount ? (
              <div className=" rounded-full w-5 h-5 bg-red-500 absolute top-0 right-3 flex items-center justify-center text-white text-xs">
                {cartItemsCount}
              </div>
            ) : null}
            <AiOutlineShoppingCart className=" absolute top-2 right-7 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
