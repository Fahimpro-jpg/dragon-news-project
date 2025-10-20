import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";
const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    image_url,
    author,
    total_view,
    rating,
   
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg  rounded-xl overflow-hidden ">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-500 hover:text-accent">
            <CiBookmark size={21}/>
          <FaShareAlt size={16} />
        </button>
      </div>

      {/* Image */}
      <figure>
        <img
          src={image_url}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </figure>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-lg font-bold leading-snug mb-2">{title}</h2>
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-accent font-medium cursor-pointer">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-yellow-400" : "text-gray-300"}
              size={14}
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye size={15} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
