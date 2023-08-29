import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//NavMobileIndex
import NavMobileIndex from "../components/Nav/NavMobileIndex";
//Iconos
import Icon from "../assets/logo/icon_bw.png"
import IconWide from "../assets/logo/wide_white.png";
//Iconos
import { FaUserCircle } from "react-icons/fa";
//Imagenes
import Burrito from "/src/assets/index/burrito.jpg";
import Pupusas from "/src/assets/index/pupusas.jpg";
//Componentes
import FoodCardSearch from "../components/FoodCardSearch";


export default function Search() {

  const [searchText, setSearchText] = useState('');
  const [showFloatingContainer, setShowFloatingContainer] = useState(false);

  const handleSearchInput = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);

    // Mostrar el contenedor flotante si hay texto en el campo de búsqueda
    setShowFloatingContainer(inputText.length > 0);
  };

  return (
    <>
    <NavMobileIndex />

    <div className='absolute w-full z-10'>
    <section className="py-4 md:px-24 px-4 drop-shadow-2xl">
      <nav className="justify-between items-center rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none">
      <Link to="/">
          <img src={Icon} className="block lg:hidden h-12 cursor-pointer my-auto" />
        </Link>
        <div className="form-control relative">
          <div className="input-group">
            <input
              type="text"
              placeholder="¿Qué estas buscando el dia de hoy?"
              className="input bg-slate-900 xl:w-[40rem] lg:w-[28rem] md:w-[17rem] xl:text-md md:text-[0.9rem] focus:outline-none"
              autoComplete="off"
              value={searchText}
              onChange={handleSearchInput}
            />
            <button className="btn bg-[#4cbb6a] hover:bg-[#4cbb69d5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {showFloatingContainer && (

            /* Contenido del contenedor flotante */
            <div className="absolute input bg-slate-900 xl:w-[40rem] lg:w-[28rem] md:w-[17rem] xl:text-md md:text-[0.9rem] h-auto focus:outline-none mt-[3.5rem] px-[1rem] py-[1rem] shadow-lg">
              <div className="h-auto">

                <FoodCardSearch name="Pupusas" photo={Pupusas} cafetin="Don Bosco" precio="1.00" categoria="Desayunos" />

                <FoodCardSearch name="Burrito de Carne" photo={Burrito} cafetin="Maria Auxiliadora" precio="2.50" categoria="Almuerzos" />

                <FoodCardSearch name="Pupusas" photo={Pupusas} cafetin="Don Bosco" precio="1.00" categoria="Desayunos" />

                <FoodCardSearch name="Burrito de Carne" photo={Burrito} cafetin="Maria Auxiliadora" precio="2.50" categoria="Almuerzos" />

              </div>
            </div>
          )}
        </div>
      </nav>
    </section>
    </div>

    
    </>
  )
}
