import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LeftAside from '../homeLayout/LeftAside';
import RightAside from '../homeLayout/RightAside';
import Loading from '../pages/Loading';
import Slider from '../components/Slider';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div className='bg-base-200'>
            <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
                <div>
                    <Slider></Slider>
                </div>
            <main className='w-11/12 mx-auto my-5 grid grid-cols-12'>
                <aside className='col-span-1'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-9'>
                    {state == 'loading' ? <Loading/> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <footer>
                    <Footer></Footer>
                </footer>
        </div>
    );
};

export default HomeLayout;