import React from 'react'
import Card from './Card'
import menuData from '../data/menu.json'

function Menu() {
  return (
    <div id='menu' className='flex flex-col my-24'>
      <h1 className='text-4xl font-bitcount text-center my-6'>MENÜ</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {
          menuData.menuItems.map((item) => (
            <Card key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
          ))
        }
      </div>
    </div>
  )
}

export default Menu