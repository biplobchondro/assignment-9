import React, { useEffect, useState } from 'react';
import ToyCard from '../components/ToyCard';

const ToyNews = () => {
  

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('/toyNews.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[]);
    return (
        <div>
            <div>
        <h2 className=" font-bold mb-5">Popular Toys</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 px-6">
          {toys.map(toy => <ToyCard key={toy.toyId} toy={toy} />)}
        </div>
      </div>
        </div>
    );
};

export default ToyNews;