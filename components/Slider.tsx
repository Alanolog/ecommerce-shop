import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

const slides = [
  {
    img: "./women.png",
    title: "Women's Sale",
    description: "Special offer 30% off for women's",
    productListCategory: "women's clothing",
  },
  {
    img: "./muscular-men.png",
    title: "Men's sale!",
    description: "Special offers up to 25% off",
    productListCategory: "men's clothing",
  },
  {
    img: "./jewelery.png",
    title: "Jewelery Sale",
    description: "Special offer for jewelery up to 33% off",
    productListCategory: "jewelery",
  },
];

const Slide: React.FC<{
  img: string;
  title: string;
  description?: string;
  productListCategory: string;
}> = ({ img, title, description, productListCategory }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/productList?category=${productListCategory}`);
  };
  return (
    <div className="flex items-center h-screen w-screen">
      <div className=" flex-1 h-full flex items-center justify-center">
        <img src={img} alt={title} className=" h-4/5" />
      </div>
      <div className=" flex-1 p-12">
        <h1 className=" text-7xl font-semibold uppercase">{title}</h1>
        <p className=" mx-12 my-0 text-xl font-medium tracking-[3px] uppercase">
          {description}
        </p>
        <button
          className="p-2 text-xl bg-transparent cursor-pointer border border-black uppercase"
          onClick={handleClick}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export const Slider = () => {
  const [currSlide, setCurrSlide] = React.useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setCurrSlide(currSlide > 0 ? currSlide - 1 : 2);
    }
    if (direction === "right") {
      setCurrSlide(currSlide < 2 ? currSlide + 1 : 0);
    }
  };

  return (
    <div className=" h-screen w-full flex bg-orange-400 relative overflow-hidden">
      <div
        className=" w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center absolute top-1/2 left-2 cursor-pointer opacity-50 z-10"
        onClick={() => handleClick("left")}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="h-full flex transition-all duration-500"
        style={{ transform: `translateX(${currSlide * -100}vw)` }}
      >
        {slides.map((slide, id) => {
          return (
            <Slide
              img={slide.img}
              title={slide.title}
              description={slide.description}
              productListCategory={slide.productListCategory}
              key={id}
            />
          );
        })}
      </div>
      <div
        className=" w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center absolute top-1/2 right-2 cursor-pointer opacity-50 z-10"
        onClick={() => handleClick("right")}
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};
