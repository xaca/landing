import React from "react";

interface IStyle {
    className:string
  }

//export default function Bienvenida({className}){
const Welcome: React.FC<IStyle> = ({ className }) => {
    return (<section className={`${className} w-[600px] mx-auto mt-10`}>
        <h1 className="mt-10">About</h1>
        <p className="mt-10">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
        <button className="mt-10 bg-green-500 rounded-sm px-5 py-2 cursor-pointer hover:(bg-green-100 text-red-200)">Available for hire</button>
    </section>);
}
export {Welcome};