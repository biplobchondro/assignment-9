import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm py-5 shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center'>Login your Account</h2>
    <div className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
        <input type="email" className="input" placeholder="Your name" />

        <label className="label">Photo URL</label>
        <input type="email" className="input" placeholder="Your Photo URL" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Your Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Your Password" />
        <div className='pt-2 font-semibold'><a className="link link-hover">Forgot password ?</a></div>
        <button className="btn btn-neutral mt-4">Register</button>
        <p className='text-center pt-5 font-semibold'>All Ready have an Account ? 
            <Link className='text-secondary' to ='/auth/login'> Login</Link></p>
        </fieldset>
    </div>
    </div>
        </div>
    );
};

export default Register;