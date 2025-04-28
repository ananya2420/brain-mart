
"use client";
import { useEffect, useState } from "react";


function BestSallingProducts(){

    const [bestSellers,setBestSellers]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        async function fetchBestSellingProducts() {
            const response = await fetch('/api/best-selling-products'); 
            const data = await response.json();
            setBestSellers(data);
            setLoading(false);
        }
        fetchBestSellingProducts();

    },[])

    if(loading){
        return <div>Loading best sellers...</div>
    }
    return <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Best selling products </h2>
       
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {bestSellers.map((product)=>(
                <div key={product.id} className="border rounded-lg p-4 text-center">
                    <img src={product.image || "/images/default.png"} alt={product.name}  className="w-32 h-32 mx-auto mb-4"/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                

                    </div>
            ))}

        </div>
    </section>
}
export default BestSallingProducts;