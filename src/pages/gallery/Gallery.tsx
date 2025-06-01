import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Cat } from "@/types/Cat";
//import axios from 'axios';

async function traerDatos()
{
    let url = "https://cataas.com/api/cats"
    const response = await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        }).catch((error)=>{
            return null;
        });
    return response.value;
}

function parseData(data:any){
   let temp:string[] = [];
   for(let i in data){
    temp.push(data[i].id);
   }
   return temp;
}

export function Gallery(){
    const[datos,setDatos] = useState<Cat[]>([]);
    useEffect(()=>{
        /*axios.get('https://cataas.com/api/cats')
        .then(function (response) {
        // handle success
        console.log(response);
        //setDatos(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        });*/
        
        let url = "https://cataas.com/api/cats";
        if(localStorage.getItem("gatos")){
            setDatos(JSON.parse(localStorage.getItem("gatos") || "[]"));
        }else{
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDatos(data);
                localStorage.setItem("gatos",JSON.stringify(data));
            });
        }   
    },[]);

    return(<> 
    <section className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">Galeria</h1>     
        <div className="grid grid-cols-4 gap-4 w-[800px] mx-auto h-auto" >
        {datos.map((dato:Cat,index:number)=>{
            return <NavLink to={`/preview/${dato.id}`}>
            <img key={index} className="blur-xs hover:filter-none size-48 inline-block" src={`https://cataas.com/cat/${dato.id}`} alt="cat" />
            </NavLink>
        })}
        </div>
    </section>
    </>);
}