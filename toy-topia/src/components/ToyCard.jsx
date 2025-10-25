import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const ToyCard = ({toy}) => {
     const { toyId, toyName, pictureURL, rating, price, availableQuantity } = toy;
    return (
        <div className="bg-base-100 rounded-xl shadow-md p-3">
      <img  src={pictureURL} alt={toyName} className="rounded-lg h-48 w-full mx-auto" />
      <h3 className=" font-bold text-pink-600 mt-3">{toyName}</h3>
      <div className='font-semibold my-2'>
        <p>Rating: {rating}</p>
      </div>
      <div className='flex justify-between font-semibold my-2'>
        <p>Available: {availableQuantity}</p>
      <p>Price: {price} $</p>
      </div>
      <Link  to={`/toy-details/${toyId}`} className="btn w-full btn-sm bg-pink-500 text-white mt-2">
      View More
      </Link>
    </div>
    );
};

export default ToyCard;

