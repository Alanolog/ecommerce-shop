import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsMap,
  BsPhoneFill,
  BsMailbox,
} from "react-icons/bs";

export const Footer = () => {
  const singleListItem = " w-1/2 mb-2";
  const contactItem = " mb-5 flex items-center";
  return (
    <div className=" flex ">
      <div className=" flex-1 flex flex-col p-5">
        <h2 className=" font-semibold text-3xl">RANDOM</h2>
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
      <div className=" flex-1 p-5">
        <h3 className=" mb-7">Useful Links</h3>
        <ul className=" m-0 p-0 flex flex-wrap">
          <li className={singleListItem}>Home</li>
          <li className={singleListItem}>Cart</li>
          <li className={singleListItem}>Man Fashion</li>
          <li className={singleListItem}>Woman Fashion</li>
          <li className={singleListItem}>Accesories</li>
          <li className={singleListItem}>My Account</li>
          <li className={singleListItem}>Order Tracking</li>
          <li className={singleListItem}>Wishlist</li>
          <li className={singleListItem}>Terms</li>
        </ul>
      </div>
      <div className=" flex-1 p-5">
        <h2>Contact</h2>
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
        <img src="./payment.png" alt="payment methods" className="w-2/3" />
      </div>
    </div>
  );
};
