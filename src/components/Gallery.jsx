import React from 'react'
import menuData from '../data/menu.json'

function Gallery() {
    return (
        <div id='galeri' className='flex flex-col my-24'>
            <h1 className='text-4xl font-bitcount text-center my-6'>GALERİ</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                {menuData.menuItems.map((item) => (
                    <div key={item.id} className="relative aspect-[4/3] w-full my-6">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery