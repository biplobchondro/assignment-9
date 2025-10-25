import React, { use, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { IoEye } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const {createUser, setUser, updateUser} = useContext(AuthContext);
    const [showRegPassword, setRegPassword] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = (event) =>{
        event.preventDefault();
        

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // const passwordRegPattern = /^.{6,}$/;
        // const caseRegPattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        // if(!passwordRegPattern.test(password)){
        //     setError('Password must be a 6 character or longer')
        //     return;
        // }else if(!caseRegPattern.test(password)){
        //     setError('Password must have at least one uppercase and one lower case character')
        //     return;
        // }


        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            // console.log(user);
            updateUser({displayName : name, photoURL : photo})
            .then(() =>{
            setUser({...user, displayName : name, photoURL : photo});
            navigate("/");
            })
            .catch((error) =>{
                // console.log(error)
                setUser(user);
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            alert(errorMessage)
        })
    }

    
    const handleToggleRegPasswordShow = (e) =>{
        e.preventDefault();
        setRegPassword(!showRegPassword);
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm py-5 shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center'>Register your Account</h2>
    <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="Your name" required/>

        <label className="label">Photo URL</label>
        <input name='photo'  type="url" className="input" placeholder="Your Photo URL" required/>

        <label className="label">Email</label>
        <input name='email' type="email" className="input" placeholder="Your Email" required/>

        <label className="label">Password</label>
        <div className='relative'>
            <input name='password' type={showRegPassword ? 'text' : 'password'}
            className="input" placeholder="Password" required/>
            <button onClick={handleToggleRegPasswordShow}
            className="btn btn-xs top-2 right-2 border-0 bg-base-100 md:right-5  absolute">
                {showRegPassword ? <FaEyeSlash size={15}/>: <IoEye size={15}/>}
            </button>
        </div>
        <button type='submit' className="btn btn-neutral mt-4">Register</button>
        <p className='text-center pt-5 font-semibold'>All Ready have an Account ? 
            <Link className='text-secondary' to ='/auth/login'> Login</Link></p>
        </fieldset>
    </form>
    </div>
        </div>
    );
};

export default Register;