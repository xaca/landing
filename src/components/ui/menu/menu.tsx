import { NavLink } from "react-router";
import { Cat } from 'lucide-react';
import "./menu.css"

export function Menu(){
    return (<section className="header relative pt-3">
            <Cat className="absolute top-3 left-10" />
            <nav className="menu flex flex-col md:flex-row md:justify-center">
                <NavLink to="/" className="mr-4 uppercase text-white">Home</NavLink>
                <NavLink to="/about" className="mr-4 uppercase text-white">About</NavLink>
                <NavLink to="/gallery" className="mr-4 uppercase text-white">Gallery</NavLink>
                <NavLink to="/services" className="mr-4 uppercase text-white">Services</NavLink>
                <NavLink to="/contact" className="mr-4 uppercase text-white">Contact</NavLink>
            </nav>
        </section>);
}