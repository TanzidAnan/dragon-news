import React from 'react';
import { AiFillEye, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

const NewsCard = (props={}) => {
    const {news} =props || {}
    return (
        <div className="card w-full bg-base-100 shadow-md p-4">
            {/* Author Info */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={news.author.img} alt={news.author.name} className="w-8 h-8 rounded-full" />
                    <span className="ml-2 text-sm font-medium">{news.author.name}</span>
                </div>
                <div className="flex space-x-2 text-gray-500">
                    <AiOutlineHeart className="cursor-pointer" />
                    <AiOutlineShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-lg font-semibold">{news.title}</h2>

            {/* Image */}
            <figure className="my-4 w-full">
                <img src={news.image_url} alt={news.title} className="w-full h-full object-cover rounded" />
            </figure>

            {/* Details */}
            <p className="text-sm text-gray-600">{news.details.substring(0, 150)}... <span className="text-primary cursor-pointer">Read More</span></p>

            {/* Rating and Views */}
            <div className="flex justify-between items-center mt-4">
                {/* Rating */}
                <div className="flex items-center text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < Math.floor(news.rating.number) ? 'text-yellow-500' : 'text-gray-300'}>
                            ★
                        </span>
                    ))}
                    <span className="ml-2 text-gray-600">{news.rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center text-gray-500">
                    <AiFillEye />
                    <span className="ml-1">{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
