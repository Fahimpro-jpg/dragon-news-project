import React from 'react';
import { Link } from 'react-router';
import { GoArrowLeft } from "react-icons/go";
const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl mt-3'>{news.title}</h2>
            <p className='mt-3'>{news.details}</p>
            <Link className='btn btn-secondary mt-5' to={`/category/${news.category_id}`}><GoArrowLeft size={24}/> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;