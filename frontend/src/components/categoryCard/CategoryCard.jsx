import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./categorycard.scss";

function CategoryCard({ item }) {
  return (
    <Link to="/CategoryPage?cat=przystawki">
      <div className="categorycard">
        <img src={item.img} alt="" />
        <div className="bg-black"></div>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
