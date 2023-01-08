import React from "react";

const ProductList: React.FC = () => {
  const optionClasses = " font-light";
  const selectClasses = " outline-none";
  return (
    <main>
      <h1 className="font-semibold text-2xl m-5">Dresses</h1>
      <div className=" flex justify-between">
        <div className="m-5">
          <span className=" text-xl font-semibold mr-5">Filter Products:</span>
          <select className={selectClasses}>
            <option disabled selected>
              Color
            </option>
            <option className={optionClasses}>White</option>
            <option className={optionClasses}>Black</option>
            <option className={optionClasses}>Red</option>
            <option className={optionClasses}>Blue</option>
            <option className={optionClasses}>Yellow</option>
            <option className={optionClasses}>Green</option>
          </select>
          <select className={selectClasses}>
            <option disabled selected>
              Size
            </option>
            <option className={optionClasses}>XS</option>
            <option className={optionClasses}>S</option>
            <option className={optionClasses}>M</option>
            <option className={optionClasses}>L</option>
            <option className={optionClasses}>XL</option>
          </select>
        </div>
        <div className="m-5">
          <span className=" text-xl font-semibold mr-5">Sort Products:</span>
          <select className={selectClasses}>
            <option selected>Newest</option>
            <option className={optionClasses}>Price (ascending)</option>
            <option className={optionClasses}>Price (descending)</option>
          </select>
        </div>
      </div>
    </main>
  );
};
export default ProductList;
