import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsMap,
  BsPhoneFill,
  BsMailbox,
} from "react-icons/bs";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  const singleListItem = " w-1/2 mb-2";
  const contactItem = " mb-5 flex items-center";
  return (
    <footer className=" flex sm:flex-col border-t mt-2">
      <div className=" flex-1 flex flex-col p-5">
        <h2 className=" font-semibold text-3xl sm:text-center">RANDOM</h2>
        <p className=" my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          obcaecati iusto voluptatibus inventore perferendis, consequatur alias
          at. Tenetur, sunt.
        </p>
        <div className=" flex">
          <div className=" w-8 h-8 rounded-full text-white bg-blue-700 flex justify-center items-center">
            <BsFacebook />
          </div>
          <div className=" w-8 h-8 rounded-full text-white bg-pink-700 flex justify-center items-center">
            <BsInstagram />
          </div>
          <div className=" w-8 h-8 rounded-full text-white bg-blue-400 flex justify-center items-center">
            <BsTwitter />
          </div>
        </div>
      </div>
      <div className=" flex-1 p-5 sm:hidden">
        <h3 className=" mb-7">Useful Links</h3>
        <ul className=" m-0 p-0 flex flex-wrap">
          <li className={singleListItem} onClick={() => router.push("/")}>
            Home
          </li>
          <li className={singleListItem} onClick={() => router.push("/cart")}>
            Cart
          </li>
          <li className={singleListItem}>
            <a href="/productList?category=men's clothing">Man Fashion</a>
          </li>
          <li className={singleListItem}>
            <a href="/productList?category=women's clothing"> Woman Fashion</a>
          </li>
          <li className={singleListItem}>
            <a href="/productList?category=jewelery">Jewelery</a>
          </li>
          <li className={singleListItem}>
            <a href="/productList?category=electronics">Electronics</a>
          </li>
        </ul>
      </div>
      <div className=" flex-1 p-5 sm:bg-gray-200">
        <h2 className="font-semibold py-2">Contact</h2>
        <div className={contactItem}>
          <BsMap className=" mr-3" />
          Warszawska 44, Warszawa 00-000
        </div>
        <div className={contactItem}>
          <BsPhoneFill className=" mr-3" />
          +48 600 600 100
        </div>
        <div className={contactItem}>
          <BsMailbox className=" mr-3" /> contact@random.random
        </div>
      </div>
    </footer>
  );
};
