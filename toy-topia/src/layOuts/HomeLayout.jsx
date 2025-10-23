import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LeftAside from '../homeLayout/LeftAside';
import RightAside from '../homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            <main className='w-11/12 mx-auto my-3 *:border grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
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

export default HomeLayout;