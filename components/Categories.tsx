import React from "react";
import { categories } from "../mockData";
import { CategoryItem } from "./";

export const Categories = () => {
  return (
    <div className=" flex p-5 justify-between">
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};
