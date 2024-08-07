import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate= useNavigate();
  return (
    
    <div onClick={()=>navigate(`/product/${item._id}`)}  className='w-[15rem] m-3 transition-all cursor-pointer hover:scale-105'>
      <div  className='h-[20rem]  bg-red-200  rounded-lg  '>
        <img className='object-cover object-left-top w-full h-full rounded-md' src={item.imageUrl} alt="" />
      </div>
      <div className='p-3 bg-gray-200 rounded-md ' >
        <p className='font-bold opacity-60'  >{item.brand}</p>
        <p className='' >{item.title}</p>
        
      
      <p> <span className='text-xl font-semibold' >₹{item.discountedPrice} </span> 
      <span className='line-through' >₹{item.price}</span>
      <span className='text-xl text-red-400' > ₹{item.discount}  off</span>
      </p>
      </div>

    </div>
  )
}

export default ProductCard