import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-6' src={logo} alt="" />
            <p className='text-[#706F6F] mt-3'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F] mt-2'> <span className='text-[#403F3F]'>{format(new Date(), 'EEEE,')}</span> {format(new Date(),  ' MMMM dd , yyyy' )}</p>
        </div>
    );
};

export default Header;