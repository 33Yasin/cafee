import React from 'react'

function AboutUs() {
  return (
    <div id='hakkimizda' className='flex flex-col my-24'>
        <h1 className='text-4xl font-bitcount text-center'>HAKKIMIZDA</h1>
        <div className='flex flex-col gap-8 mt-8 text-gray-700 text-center'>
            <div>
                Merhaba! Biz, Cafee. Lezzeti ve keyfi bir araya getiren sıcak bir buluşma noktasıyız. Menümüzde, taptaze pizzalar, ev yapımı burgerler, salatalar, tatlılar ve ferahlatıcı milkshake’ler sizi bekliyor. 🍔
            </div>
            <div>
                Amacımız, sadece yemek sunmak değil; her lokmada keyif ve samimiyet hissettirmek. Arkadaşlarınızla buluşmak veya kendinize küçük bir ödül vermek için Cafee’ye gelin ve her anın tadını çıkarın! 🙂
            </div>
        </div>
    </div>
  )
}

export default AboutUs