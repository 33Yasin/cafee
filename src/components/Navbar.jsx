import React, { useState } from 'react';
import burgerIcon from '../assets/burger.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // mobil menü kapanır
    }
  }

  return (
    <div className='flex justify-between items-center p-4 mb-24 fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-20'>
      <div 
        className='font-bitcount'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  
      >Cafee</div>

      {/* Masaüstü menü */}
      <div className='z-10 hidden sm:block'>
        <ul className='flex space-x-6'>
          <li className=' p-2 rounded-md cursor-pointer' onClick={() => scrollToSection('menu')}>Menü</li>
          <li className=' p-2 rounded-md cursor-pointer' onClick={() => scrollToSection('hakkimizda')}>Hakkımızda</li>
          <li className=' p-2 rounded-md cursor-pointer' onClick={() => scrollToSection('galeri')}>Galeri</li>
          <li className=' p-2 rounded-md cursor-pointer' onClick={() => scrollToSection('iletisim')}>İletişim</li>
        </ul>
      </div>

      {/* Mobil menü */}
      <div className='sm:hidden'>
        <button className='block' onClick={openMenu}>
          <img src={burgerIcon} alt="Menu" width={25} height={25} />
        </button>
        {isMenuOpen && (
          <ul className='z-10 absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 flex flex-col'>
            <li className='hover:bg-amber-400 px-4 py-2 cursor-pointer' onClick={() => scrollToSection('menu')}>Menü</li>
            <li className='hover:bg-amber-400 px-4 py-2 cursor-pointer' onClick={() => scrollToSection('hakkimizda')}>Hakkımızda</li>
            <li className='hover:bg-amber-400 px-4 py-2 cursor-pointer' onClick={() => scrollToSection('galeri')}>Galeri</li>
            <li className='hover:bg-amber-400 px-4 py-2 cursor-pointer' onClick={() => scrollToSection('iletisim')}>İletişim</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar;
