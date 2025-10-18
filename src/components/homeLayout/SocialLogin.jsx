import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login with</h2>
            <div className='flex flex-col space-y-3 w-[70%] mt-3'>
                <button className='btn text-blue-400 hover:btn-secondary btn-outline'><FcGoogle size={24} />Login in with google</button>
                <button className='btn hover:btn-primary btn-outline w-full'><FaGithub size={24}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;