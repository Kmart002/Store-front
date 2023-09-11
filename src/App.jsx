import React, { useEffect, useState } from "react";
import SideBar from "./Component/SideBar";
import Header from "./Component/Header";
import MainContent from "./Component/MainContent";

const baseApiUrl = "https://fakestoreapi.com/";

const App = () => {
    const [pageTitle] = useState("STORE FRONT");
    const [products, setProducts] = useState([
      {
        id:null,
        title:null,
        price:null,
        category:null,
        description:null,
        image:null
    },
    ]);

    const getProducts = async () => {
    
      try {
        const response = await fetch(baseApiUrl + "products");
        const data = await response.json();
        setProducts(data)

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      getProducts()
    }, [])
  return (
    <div className=' h-[100svh] overflow-hidden bg-[#f5f5f5]'>
      <Header pageTitle = {pageTitle }/>

      <section className='h-full overflow-auto grid grid-cols-1 md:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr]' >

      <SideBar/>
      <MainContent products = {products}/>

      </section>
      App
    </div>
  );
}

export default App;
