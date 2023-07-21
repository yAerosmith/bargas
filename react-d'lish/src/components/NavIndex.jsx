import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import User from "../../src/assets/index/user.png";

export default function NavIndex() {
  return (
    <>
      <section className="py-4 md:px-24 px-4 drop-shadow-2xl">
        {/* Eliminar "rounded-2xl" para lograr el Navbar cuadrado (y hacer los respectivos cambios en el componente que se requiera)  */}
        <nav className="justify-between items-center rounded-2xl bg-neutral drop-shadow-md px-9 py-5 list-none hidden md:flex">
          {/* Link a Homepage */}
          <Link to="../../views/index.jsx">
            <img
              src="../src/assets/logo/icon_bw.png"
              alt="Logo"
              className="h-10 md:h-12 cursor-pointer my-auto"
            />
          </Link>
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="¿Que estas buscando el dia de hoy?"
              className="input input-bordered w-[10rem] md:w-[18rem] lg:w-[25rem] md:text-sm lg:text-md rounded-2xl bg-slate-900 drop-shadow-md px-7 py-6"
            />

            <button className="input input-bordered w-[3rem] rounded-xl bg-slate-900 text-white px-auto py-auto">
              <IoSearch />
            </button>

          </div>
          <div className="flex self-center gap-2">
            <div className="text-slate-300">
              <FaUserCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10" />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
