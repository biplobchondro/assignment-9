import React, { use, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(e.target)

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
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
                console.log(error)
                setUser(user);
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            alert(errorMessage)
        })
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
        <input name='password' type="password" className="input" placeholder="Your Password" required/>
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