
"use client";
import { useEffect, useState } from "react";

function InfoSection(){

    const[infos,setInfos]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{

        async function fetchInfos() {
            const response = await fetch('/api/infos');
            const data = await response.json();
            setInfos(data);
            setLoading(false);
        }
        fetchInfos()
    },[])

    if(loading){
        return(
            <div className="flex justify-center items-center h-40">
                <p  className="text-lg font-medium">loading...</p>
            </div>
        )
    }

    return <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {infos.map((info)=>(
                <div key={info.id} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={info.image} alt={info.title} className="w-20 h-20 mb-4 object-contain"/>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.description}</p>

                    </div>
            ))}

        </div>
    </section>

}
export default InfoSection;
