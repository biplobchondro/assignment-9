import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='nav flex gap-6 items-center font-semibold text-accent'>
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/about'>About</NavLink>
                <NavLink to = '/my-profile'>My Profile</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={userImg} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;