import React from 'react'

const MainContent = ({products}) => {

    console.log(products);
  return (
    <div className=' p-10 flex flex-wrap justify-evenly gap-10'>
        {products.map((product)=>(

        <section className=' h-72 w-52 bg-white rounded-md shadow-sm'>
            <img src={product.image} alt="" className=' h-36 w-[75%] object-contain mx-auto p-3'  />
            <h1 title={product.title} className=' text-center font-bold'>{product.title}</h1>
            <h3 className=' font-extrabold text-center'>${product.price}</h3>
            <h3 className=' font-extrabold text-center'>{product.category}</h3>
        </section>
        ))}
        </div>
  )
}

export default MainContent;