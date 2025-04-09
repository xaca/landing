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

export default function Galeria(){
    const[datos,setDatos] = useState("");
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
        setDatos("1,2,3,4");
        console.log(datos);
        /*let url = "https://cataas.com/api/cats";
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setDatos(data);
        });
        console.log(datos)*/
    },[]);

    return(<>
    {datos.split(",").map((dato,index)=>{
        dato
    })}
    <Menu />
    <h1>Galeria</h1>
    </>);
}