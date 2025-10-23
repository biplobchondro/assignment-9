import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext);
    return (
        <div className='flex justify-between py-4'>
            <div>{user && user.email}</div>
            <div className='nav flex gap-6 items-center font-semibold text-accent'>
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/about'>About</NavLink>
                <NavLink to = '/my-profile'>My Profile</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={userImg} alt="" />
                <Link to = "/auth/login" className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;