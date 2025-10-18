import React from 'react';
import swimImage from '../../assets/swimming.png'
import classImage from "../../assets/class.png"
import playground from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5 mt-5 text-2xl text-[#403F3F] ml-5'>Q-zone</h2>
            <div>
            <img src={classImage} alt="" />
            <img src={swimImage} alt="" />
            <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;