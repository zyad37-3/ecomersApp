import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoIosStarHalf } from "react-icons/io";
interface RatingStarsProps {
  rating: number;
};
export default function StarRating({ rating }:RatingStarsProps) {

    return (
        <div className='flex items-center '>
            {[1, 2, 3, 4, 5].map((star) => {
                if (rating >= star) {
                    return <FaStar key={star} className="text-yellow-400" />;

                } else if (rating >= star - 0.5) {
                     return <IoIosStarHalf key={star} className="text-yellow-400" />
                }else {
                   
                    return <FaRegStar key={star} className="text-yellow-400" />
                }
            })}
        </div>
    )
}
