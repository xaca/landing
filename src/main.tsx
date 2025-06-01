import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import {Home} from "@/pages/home/Home"
import {About} from "@/pages/about/About"
import {Gallery} from "@/pages/gallery/Gallery"
import {Contact} from "@/pages/contact/Contact"
import {Services} from "@/pages/services/Services"
import {Menu} from "@/components/ui/menu/Menu"

const targetElement = document.getElementById("root"); // how do i fix this error
const root = ReactDOM.createRoot(targetElement!);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
