import React from 'react';
import meyveler from '../assets/images/meyveler.png';
import sebzeler from '../assets/images/sebzeler.png';

function HeroSection() {
    return (
                <div className='flex flex-col items-center justify-between gap-4 pt-20 sm:flex-row'>
            <div className='relative w-full'>
                <img className='rounded-full' src={meyveler} alt="meyve resimleri" />
                <ul className='absolute inset-0 top-4 flex flex-col justify-center items-center space-x-4 text-lg'>
                    <li className="text-6xl font-bold text-white bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
                        Günlük
                    </li>
                    <li className="text-6xl font-bold text-white bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
                        Taze
                    </li>
                    <li className="text-6xl font-bold text-white bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
                        Meyveler
                    </li>
                </ul>
            </div>
            <div className='relative w-full'>
                <img className='rounded-full' src={sebzeler} alt="meyve resimleri" />
                <ul className='absolute inset-0 top-4 flex flex-col justify-center items-center space-x-4 text-lg'>
                    <li className="text-6xl font-bold text-white bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
                        Günlük
                    </li>
                    <li className="text-6xl font-bold text-white bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
                        Taze
                    </li>
                    <li className="text-6xl font-bold text-white bg-white/30 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
                        Sebzeler
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default HeroSection;
