import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "../components";
import Link from "next/link";

export const Navbar = () => {
  const { cartItemsCount, setCartItemsCount } = useContext();

  React.useEffect(() => {
    setCartItemsCount(JSON.parse(localStorage.getItem("cart") || "[]").length);
  }, []);
  return (
    <div className=" h-16 sm:h-12 ">
      <div className=" px-3 py-5 flex justify-between sm:py-2">
        <div className=" flex-1 flex items-center sm:hidden">
          <span className=" text-sm cursor-pointer">EN</span>
        </div>
        <div className=" flex-1 text-center sm:text-start ">
          <h1 className=" font-semibold text-2xl sm:text-xl">
            <Link href="/">RANDOM.</Link>
          </h1>
        </div>
        <div className=" flex-1  relative sm:content-center">
          <div className=" cursor-pointer mr-5 sm:mr-2">
            <Link href="/cart">
              {cartItemsCount ? (
                <div className=" rounded-full w-5 h-5 bg-red-500 absolute top-0 right-3 flex items-center justify-center text-white text-xs">
                  {cartItemsCount}
                </div>
              ) : null}
              <AiOutlineShoppingCart className=" absolute top-2 right-7 text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
