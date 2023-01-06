import React from "react";

interface IProps {
  item: {
    img: string;
    title: string;
    id: number;
  };
}

export const CategoryItem: React.FC<IProps> = ({ item }) => {
  return (
    <div className=" flex-1 m-1 h-[70vh] relative">
      <img
        src={item.img}
        alt={item.title}
        className=" w-full h-full object-cover  "
      />
      <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col">
        <h2 className=" font-semibold uppercase text-3xl text-white mb-5">
          {item.title}
        </h2>
        <button className=" uppercase border-none p-3 bg-white text-gray-600 font-semibold rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};
