import React, { useEffect, useState } from 'react';
import ToyCard from '../components/ToyCard';

const ToyNews = () => {
    // const {id} = useParams();
    // const data = useLoaderData();
    // const [categoryToy, setCategoryToy] = useState([]);
    // // console.log(id, data)
    // useEffect(() =>{
    //     if(id == '0') {
    //         setCategoryToy(data);
    //     }
    // }, [data, id])

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('/toyNews.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[]);
    return (
        <div>
            <div className="mt-6">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Toys</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          {toys.map(toy => <ToyCard key={toy.toyId} toy={toy} />)}
        </div>
      </div>
        </div>
    );
};

export default ToyNews;