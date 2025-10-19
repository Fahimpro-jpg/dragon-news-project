import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser,setUser}  = use(AuthContext)
    const handleRegister = (e)=>{
        e.preventDefault()
        
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,photo,password,email)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            // console.log(user)
           setUser(user)
        })
        .catch(error=>{
            
            const errorMessage =error.message
           alert(errorMessage)
        })
    }
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center mt-5 font-semibold'>Register your account</h2>
      <form onSubmit={handleRegister}>
        <div className="card-body">
        <fieldset className="fieldset">
            {/* name */}
          <label className="label text-[#403F3F] font-semibold">Your Name</label>
          <input name='name' type="text" className="input" placeholder="Enter your name"
          required />
          {/* photo url */}
          <label className="label text-[#403F3F] font-semibold">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Enter Your PhotoURl"
          required />
          {/* email */}
          <label className="label text-[#403F3F] font-semibold">Email</label>
          <input name='email' type="email" className="input" placeholder="Email"
          required />
          {/* password */}
          <label className="label text-[#403F3F] font-semibold">Password</label>
          <input 
          name='password'
          type="password" className="input" placeholder="Password" 
          required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='text-center mt-3'>Already Have An Account? <Link className='text-secondary font-semibold' to='/auth/login'>Login</Link></p>
      </div>
      </form>
    </div>
         </div>
    );
};

export default Register;