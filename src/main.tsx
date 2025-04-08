import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Galeria from "./pages/gallery/galeria"
import Contacto from "./pages/contact/contacto"
import About from "./pages/about/about"
import Servicios from "./pages/services/servicios";

const targetElement = document.getElementById("root"); // how do i fix this error
const root = ReactDOM.createRoot(targetElement!);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="contactos" element={<Contacto />} />
        <Route path="servicios" element={<Servicios />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
