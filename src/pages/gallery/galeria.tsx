import { useEffect, useState } from "react";
import Menu from "../../components/ui/menu/menu"
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

export default function Galeria(){
    const[datos,setDatos] = useState<string[]>([]);
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
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setDatos(parseData(data));
        });
    },[]);

    return(<>      
    <Menu />
    <div className="grid grid-cols-4 gap-4 w-[800px] mx-auto h-auto" >
    {datos.map((dato:any,index:number)=>{
        return <img key={index} className="blur-xs hover:filter-none size-48 inline-block" src={`https://cataas.com/cat/${dato}`} alt="cat" />
    })}
    </div>
    <h1>Galeria</h1>
    </>);
}