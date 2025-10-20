import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signIn} = use(AuthContext)

    const handleLogIn = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log({email,password})
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode,errorMessage)
        })
    }
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl text-center mt-5 font-semibold'>Login your account</h2>

     <form onSubmit={handleLogIn}>

         <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          name='email'
          type="email" className="input" placeholder="Email" />
          {/* email */}
          <label className="label">Password</label>
          <input 
          name='password'
          type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='text-center mt-3'>Don't Have An Account? <Link className='text-secondary font-semibold' to='/auth/register'>Register</Link></p>
      </div>
     </form>
    </div>
         </div>
    );
};

export default Login;