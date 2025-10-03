import React from 'react'

function Card({title, description, imageUrl}) {
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 my-6 bg-white">
      <div className="relative aspect-[4/3] w-full">
        <img 
          src={imageUrl} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-amber-600 mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card