import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
            <header className=' mr-7 w-11/12 py-4 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
            <Outlet></Outlet>

            </main>
        </div>
    );
};

export default AuthLayout;