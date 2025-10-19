import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center mt-5 font-semibold'>Login your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='text-center mt-3'>Don't Have An Account? <Link className='text-secondary font-semibold' to='/auth/register'>Register</Link></p>
      </div>
    </div>
         </div>
    );
};

export default Login;