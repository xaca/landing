import React from "react";
import { NavLink } from "react-router";
import { Cat } from 'lucide-react';
import "./menu.css"

export default function Menu(){
    return (<section className="header relative pt-3">
            <Cat className="absolute top-3 left-10" />
            <nav className="menu flex flex-col md:flex-row md:justify-center">
                <NavLink to="/" className="mr-4 uppercase text-white">Home</NavLink>
                <NavLink to="/about" className="mr-4 uppercase text-white">About</NavLink>
                <NavLink to="/galeria" className="mr-4 uppercase text-white">Gallery</NavLink>
                <NavLink to="/servicios" className="mr-4 uppercase text-white">services</NavLink>
                <NavLink to="/contactos" className="mr-4 uppercase text-white">Contact</NavLink>
            </nav>
        </section>);
}