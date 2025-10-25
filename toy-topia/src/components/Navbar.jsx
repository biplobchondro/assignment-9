import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogOut =() => {
        // console.log('user trying to LogOut');
        logOut()
        .then(() => {
            alert('You Logged Out Successfully')
        })
        .catch((error) => {
            // console.log(error)
        })
    }
    return (
        <div className='flex justify-between py-4'>
            <div className='font-semibold items-center gap-3 flex'>
                <img className='w-9 h-9' src="https://i.ibb.co.com/MkRpT1S2/icon.png" alt="" />
                <h2>Toy-Topia</h2>
            </div>
            <div className=' flex gap-6 items-center font-semibold text-accent'>
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/about'>About</NavLink>
                <NavLink to = '/my-profile'>My Profile</NavLink>
            </div>
            <div className='login-btn flex gap-5 items-center'>
                <img className='w-14 rounded-full '
                src={`${user ? user.photoURL : userImg}`} alt="" />
                {
                    user ? (
                        <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button>
                    ) : (
                        <Link to = "/auth/login" className='btn btn-primary px-10'>
                Login</Link>
                    )
                }
                
            </div>
        </div>
    );
};

export default Navbar;