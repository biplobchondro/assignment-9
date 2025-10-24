import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyDetailsCard = ({toys}) => {
    console.log(toys)

    const { toyId, toyName, pictureURL, rating, price, availableQuantity } = toys;

    return (
        <div>
        <div className="bg-pink-100 shadow-md p-3">
      <img src={pictureURL} alt={toyName} className="rounded-lg h-48 mx-auto" />
      <h3 className=" font-bold text-pink-600 mt-3">{toyName}</h3>
      <p>Rating: <FaStar/> {rating}</p>
      <p>Available: {availableQuantity}</p>
      <p>Price: ${price}</p>
      <Link  to={`/toyNews/${toyId}`} className="btn w-full btn-sm bg-pink-500 text-white mt-2">
      Back to Toys
      </Link>
    </div>
        </div>
    );
};

export default ToyDetailsCard;