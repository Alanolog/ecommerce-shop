import React from "react";
import { Newsletter } from "../components";
import { MdRemoveCircleOutline } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";

const Product: React.FC = () => {
  const filterColorClasses = " w-5 h-5 rounded-full mx-1 cursor-pointer";
  const filterSizeClasses = " ml-2 p-1";
  return (
    <main>
      <div className=" p-12 flex">
        <div className="flex-1">
          <img
            src="./jeans.jpg"
            alt="jeans"
            className=" w-full h-5/6 object-cover"
          />
        </div>
        <div className=" flex-1 px-12">
          <h2 className=" font-extralight text-7xl">Jeans</h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            eligendi pariatur, perferendis deserunt explicabo rerum illum omnis
            corporis. Numquam quam provident architecto assumenda quae culpa
            fugiat voluptate optio sequi dolores accusamus blanditiis, beatae
            delectus pariatur aspernatur recusandae eum totam perferendis ad!
            Tempora, alias fugit! Aliquid neque dolorum et natus animi.
          </p>
          <span className=" font-thin text-4xl">20 USD</span>
          <div className="flex justify-between w-1/2 my-8">
            <div className=" flex items-center">
              <span className=" text-xl font-extralight">Color</span>
              <div
                className={`${filterColorClasses} bg-black `}
                color="black"
              ></div>
              <div
                className={`${filterColorClasses} bg-blue-800 `}
                color="darkblue"
              ></div>
              <div
                className={`${filterColorClasses} bg-gray-700 `}
                color="gray"
              ></div>
            </div>
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
          <div className=" flex items-center w-1/2 justify-between">
            <div className=" flex items-center font-bold">
              <MdRemoveCircleOutline className=" cursor-pointer" />
              <span className=" w-8 h-8 rounded-xl border border-teal-600 flex items-center justify-center mx-1">
                1
              </span>
              <RiAddCircleLine className="cursor-pointer" />
            </div>
            <button className=" uppercase p-4 border-2 border-teal-600 bg-white cursor-pointer rounded-sm hover:bg-slate-100 transition-all ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </main>
  );
};
export default Product;
