import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';


const ProductDetails = () => {
   
    let params=useParams(); //!to extract the slug value
    
    let {id}=params;  //params

    let [singleProduct,setSingleProduct]=useState({}); //params

    let getsingleProduct=async () =>{                        //params
      let result=await fetch(`https://fakestoreapi.com/products/${id}`)
      let data=await result.json();
      getsingleProduct(data)
    }
    useEffect(()=>{     //params
      getsingleProduct()
    },[id])
    
  return (
    <>
    {/* <section className='w-1/2 mt-10 mx-auto p-5 border-2 border-[#999] bg=[#efefef] flex items-center gap-x-5'>
    <aside>
      <img src={singleProduct.image} className='mix-blend-multiply h-full w-full object-contain' alt={singleProduct.title} />
    </aside>
    <aside>
        <h1 className='border-b-[0.5px] border-[#888] pb-2'>{category}</h1>
        <h2 className='border-b-[0.5px] border-[#888] pb-2'>{title}</h2>
        <h3 className='border-b-[0.5px] border-[#888] pb-2'>{price}</h3>
        <p>{singleProduct.description}</p>
     </aside>
     </section> */}
     <section className="w-1/2 mt-10 mx-auto p-5 border-2 border-[#999] bg-[#efefef] flex items-center gap-x-5">
            <aside>
                <img
                    src={singleProduct.image}
                    className="mix-blend-multiply h-full w-full object-contain"
                    alt={singleProduct.title}
                />
            </aside>
            <aside>
                <h1 className="border-b-[0.5px] border-[#888] pb-2">{singleProduct.category}</h1>
                <h2 className="border-b-[0.5px] border-[#888] pb-2">{singleProduct.title}</h2>
                <h3 className="border-b-[0.5px] border-[#888] pb-2">${singleProduct.price}</h3>
                <p>{singleProduct.description}</p>
            </aside>
        </section>
     </>
  )
}

export default ProductDetails
