import React from "react";
import { useRouter } from "next/router";

interface IProps {
  item: string;
}

export const CategoryItem: React.FC<IProps> = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/productList/${item}`);
  };

  let itemImgSrc = "./categories-base.jpg";
  switch (item) {
    case "electronics": {
      itemImgSrc = "./electronics.jpg";
      break;
    }
    case "jewelery": {
      itemImgSrc = "./jewelery.jpg";
      break;
    }
    case "men's clothing": {
      itemImgSrc = "./mens-clothing.jpg";
      break;
    }
    case "women's clothing": {
      itemImgSrc = "./womens-clothing.jpg";
      break;
    }
    default: {
      itemImgSrc = "./categories-base.jpg";
      break;
    }
  }
  return (
    <div className=" flex-1 m-1 h-[70vh] relative">
      <img
        src={itemImgSrc}
        alt={item}
        className=" w-full h-full object-cover sm:h-[30vh] "
      />
      <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col">
        <h2 className=" font-semibold uppercase text-3xl text-white mb-5 lg:text-center">
          {item}
        </h2>
        <button
          className=" uppercase border-none p-3 bg-white text-gray-600 font-semibold rounded-md"
          onClick={handleClick}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};
