import React, {  useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RightAside from '../homeLayout/RightAside';
import ToyDetailsCard from '../components/ToyDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const ToyDetails = () => {
    const data = useLoaderData();
    const {toyId} = useParams();
    const [toys, setToys] = useState({});
    // console.log(data, toyId, toys);

    useEffect(() =>{
        const toyDetails = data.find(singleToys => singleToys.toyId == toyId)
        setToys(toyDetails);
    }, [data, toyId]);

    return (
        <div>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
            <section className='col-span-9'>
                <h2 className='font-semibold mb-5'>Toys Details</h2>
                <ToyDetailsCard toys = {toys}></ToyDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ToyDetails;