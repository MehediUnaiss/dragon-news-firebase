import React from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="p-10 shadow-2xl rounded-md space-y-5">
      <h1 className="font-semibold text-2xl mb-5">Dragon News</h1>
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <p className="text-2xl font-semibold">{news.title}</p>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="btn btn-primary">
        <IoReturnDownBackSharp className="font-bold" /> View Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
