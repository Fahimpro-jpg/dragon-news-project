import React from 'react';
import facebookIcon from "../../assets/fb.png"
import instaIcon from "../../assets/instagram.png"
import twitterIcon from "../../assets/twitter.png"
const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mt-8 mb-5'>Find us on</h2>
            <div className=' flex flex-col '>
                
               <a className='btn text-[#706F6F] border-0 justify-start' href="https://www.facebook.com/md.fahad.alam.fahim"><img src={facebookIcon} alt="" />                     Facebook</a>
               <a className='btn text-[#706F6F] border-0 justify-start' href="https://x.com/?lang=en"><img src={twitterIcon} alt="" />                     Twitter</a>
               <a className='btn text-[#706F6F] border-0 justify-start' href="https://www.instagram.com/"><img src={instaIcon} alt="" />                     Instagram</a>
               
            
            </div>
        </div>
    );
};

export default FindUs;