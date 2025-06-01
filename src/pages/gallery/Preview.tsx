import { useParams,Navigate, NavLink } from "react-router";
import { Cat } from "@/types/Cat";
import { useState,useEffect } from "react";

export function Preview(){
    const {id} = useParams();
    const [gato,setGato] = useState<Cat | null>(null);
    useEffect(()=>{
        const datos = localStorage.getItem("gatos");
        console.log(id,datos);
        if(datos){
            const gatos = JSON.parse(datos);
            const gato = gatos.find((gato:Cat)=>gato.id === id);
            setGato(gato);
        }
    },[id]);
    return(
        <section className="container mx-auto px-4 py-8 ">
            <h1 className="text-4xl font-bold text-center mb-8">Preview</h1>
            <div className="flex flex-col items-center justify-center w-[600px] mx-auto">
            <div className="flex justify-start w-full mb-4">
                <NavLink to="/gallery" className="bg-blue-500 text-white px-4 py-2 rounded-md">Volver</NavLink> 
            </div>
            {gato && (
                    <img src={`https://cataas.com/cat/${gato.id}`} alt="cat" className="" />
                )}
            </div>
        </section>
    );
}