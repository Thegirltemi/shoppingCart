
import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { clearCart, getCartItems, getCartTotal } from '../redux/feature/cartSlice'
import CartItems from './CartItems'

const CartContainer = () => {
  
  const {items, totalAmount} = useSelector((state) => state.cart)
   const  dispatch = useDispatch();
   useEffect(()=>{
   dispatch(getCartTotal());
  },[items]);

  if(items.length === 0){
    return(
      <>
      <h3 className="mt-4 font-bold text-3xl text-center">Your shopping Cart is Empty </h3>
      <button className='border-2 border-blue-300 p-2 m-10' onClick={()=> dispatch(getCartItems())}>Get items</button>
      </>
    )
  }

  return (
    <div>
        <h2>Your shopping cart</h2>
        {items.map((item)=>{
            return<CartItems key={item.id} {...item}/>
        })}
        <footer>
          <hr/>
         <div className='flex justify-around text-3xl mt-5'>
            <h4>Total</h4>
            <p>${totalAmount}</p>
            <button className='bg-red-700 p-2 text-sm text-white rounded'
            onClick={()=> dispatch(clearCart())}>Clear cart</button>
          </div>
        
        </footer>
    </div>
  )
}

export default CartContainer