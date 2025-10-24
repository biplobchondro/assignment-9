import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const ToyCard = ({toy}) => {
     const { toyId, toyName, pictureURL, rating, price, availableQuantity } = toy;
    return (
        <div className="bg-pink-100 shadow-md p-3">
      <img src={pictureURL} alt={toyName} className="rounded-lg h-48 mx-auto" />
      <h3 className=" font-bold text-pink-600 mt-3">{toyName}</h3>
      <p>Rating: <FaStar/> {rating}</p>
      <p>Available: {availableQuantity}</p>
      <p>Price: ${price}</p>
      <Link  to={`/toy-details/${toyId}`} className="btn w-full btn-sm bg-pink-500 text-white mt-2">
      View More
      </Link>
    </div>
    );
};

export default ToyCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const ToyCard = ({ toy }) => {
//   const {
//     pictureURL,
//     toyName,
//     rating,
//     availableQuantity,
//     price,
//   } = toy;

//   return (
//     <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition-shadow duration-300">
//       <figure className="p-4">
//         <img
//           src={pictureURL}
//           alt={toyName}
//           className="rounded-xl object-cover h-48 w-full"
//         />
//       </figure>

//       <div className="card-body">
//         <h2 className="card-title text-lg font-semibold">{toyName}</h2>

//         <div className="flex items-center justify-between text-sm mt-2">
//           <div className="flex items-center gap-1 text-yellow-500">
//             <FaStar />
//             <span className="text-gray-700">{rating}</span>
//           </div>
//           <span className="text-gray-600">
//             Qty: <span className="font-medium">{availableQuantity}</span>
//           </span>
//         </div>

//         <p className="text-primary font-semibold mt-2">${price}</p>

//         <div className="card-actions justify-end mt-4">
//           <button className="btn btn-primary btn-sm">View More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToyCard;
