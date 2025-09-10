import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Electronics", image: "/src/assets/market.jpg" },
    { name: "Groceries", image: "/src/assets/market.jpg" },
    { name: "Clothing", image: "/src/assets/market.jpg" },
    { name: "Handmade", image: "/src/assets/market.jpg" },
    { name: "Machine-made", image: "/src/assets/market.jpg" },
  ];
  return (
    <div className="categories my-[50px] flex justify-center items-center">
      <div className="categories-container flex flex-col justify-center items-center gap-6">
        <h1 className="categories-title text-center font-semibold text-black text-3xl">
          Categories
        </h1>
        <div className="categories-list-contianer flex justify-center items-center gap-10">
          {categories.map((category) => (
            <div
              className="categories-list flex flex-col items-center justify-center gap-2 bg-amber-100 h-[150px] w-[150px] rounded"
              key={category}
            >
              <p className="category-list-title text-[18px] font-[500]">
                {" "}
                {category.name}{" "}
              </p>
              <img
                src={category.image}
                alt={category.name}
                className="category-image w-[80px] rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
