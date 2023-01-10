import React from "react";
import { CategoryItem } from "./";

interface IProps {
  categories: string[];
}

export const Categories: React.FC<IProps> = ({ categories }) => {
  return (
    <div className=" flex p-5 justify-between md:flex-col sm:p-0 lg:flex-wrap">
      {categories.map((item, id) => (
        <CategoryItem item={item} key={id} />
      ))}
    </div>
  );
};
