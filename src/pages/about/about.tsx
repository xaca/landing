import React from "react";
import Menu from "../../components/ui/menu/menu"
import Bienvenida from "./bienvenida";

export default function About(){
    return (<>
    <Menu />
    <Bienvenida className="mx-auto px-7 w-full md:w-[600px]" />
    </>);
}