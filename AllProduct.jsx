import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const AllProducts = () => {
    let [products,setProducts]=useState([]);
    
    let getProducts=async () =>{
        let result=await fetch("https://fakestoreapi.com/products");
        let data=await result.json();
        setProducts(data);
    };
    console.log(products);
        useEffect(()=>{
          getProducts();
        },[]);
  return (
    <div className='flex flex-wrap w-4/5 mx-auto gap-2 mt=10'>
      {
        products!==undefined && products.map((product)=>{
          let {id}=product
          return <>
          <div className='flex flex=col items-center p-5 border-1 border-[#888]'>
            <img src={product.image} className='h-[150px] w-[150px]' alt={product.title} />
            <button className='p-2 w=[80%] bg-[orange] mt-4 rounded-lg text-white border-2 border-[#888]'>
              {/* <NavLink to={`/product/${id}`} state={product}>View More</NavLink> */}
              <NavLink to={`/product/${id}`}>View More</NavLink>
            </button>

          </div>
          </>
        })
      }
      
    </div>
  )
}

export default AllProducts
