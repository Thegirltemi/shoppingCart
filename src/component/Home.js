

import React from 'react'
import {categories} from '../data'

const Home = () => {
 

  return (
    <div className='bg-gray-200'>
    <h2 className='text-center font-bold text-3xl p-5'>Our product</h2>
    {categories.map(({img, id, title, price})=>{
       return(
         <div className='flex items-center justify-around '>
        
           <img className="w-48 h-48 mb-2" src={img} alt={title}/>
           <div>
           <h3>{title}</h3>
           <p>${price}</p>
            <button className='text-bold bg-blue-100 p-5 font-bold'>Add to Cart</button>
            </div>
         </div>
                  
       )
    })}
    </div>
  )
}

export default Home
