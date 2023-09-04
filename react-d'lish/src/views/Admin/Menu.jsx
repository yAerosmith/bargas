import React, { useEffect } from "react";
// Componentes
import ProductRow from "../../components/Admin/ProductRow";
import ProductHeader from "../../components/Admin/ProductHeader";
import Spinner from "../../components/Spinner";
import EmptyMenu from "../../components/Admin/EmptyMenu";
// CSS =======
import "../../css/productsTable.css";
// CONTENIDO VARIABLE ====
import clienteAxios from "../../config/axios";
import useSWR, { mutate } from 'swr';
import useOwner from "../../hooks/useOwner";

function ProductAdmin() {
  const { actuCache } = useOwner();
  const token = localStorage.getItem('AUTH_TOKEN');
  const idOwner = localStorage.getItem('CAFE_ID');

  const fetcher = () => clienteAxios(`/api/owner/${idOwner}/menu`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data);

  const { data, error, isLoading } = useSWR(`/api/owner/${idOwner}/menu`, fetcher);

  useEffect(() => {
    console.log('actualizando we');
    mutate(`/api/owner/${idOwner}/menu`);
  }, [actuCache])

  // CARGANDO ===== 
  if (isLoading) return <Spinner />

  return (
    <div className="mb-10 sm:ml-[2rem] md:ml-[5rem] ml-[1rem] h-[100%] animate-fade animate-duration-500 ">

      <div className="flex justify-center items-center w-full flex-col gap-6 p-10">
        <hr className='bg-accent h-1 w-1/2 m-auto' />

        <h1 className="text-4xl font-extrabold text-gray-800 font-title text-center">Añade componentes</h1>

        <p className="text-gray-600 text-lg sm:text-xl text-center md:text-left">¿Aún no tienes tú menú del día?
          <br className="inline md:hidden " /> Registra lo diponible en tus almuerzos</p>
        {/* ------- El modal se abre con el metodo ID.showModal() ----------*/}
        <button
          className="btn btn-primary w-1/2"
          onClick={() => window.product_modal_1.showModal()}
        >
          Agregar producto
        </button>
        <hr className='bg-accent h-1 w-1/2 m-auto' />
      </div>


      {/* ------------- FIN DEL MODAL ------------ */}

      {/************************************************/}
      {/* ------------Almuerzos------------- */}
      {/************************************************/}

      <h3 className="my-7 text-center text-terc font-bold text-2xl">
        {" "}ALMUERZO{" "}
      </h3>
      <div id="MainDishCont" className="flex justify-center">
        {data?.mainDishes?.length ? (
          <div className="flex items-center w-[80%] justify-center">
            <div className="container">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  {data?.mainDishes.map((main) => (
                    // Encabezado de la tabla para cada producto
                    <ProductHeader key={main.id + "-main"} />
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none text-[#414141]">
                  {data?.mainDishes.map((mainDish, id) => (
                    <ProductRow
                      active={mainDish.active}
                      type={mainDish.type}
                      key={mainDish.id}
                      id={mainDish.id}
                      ProductNum={id}
                      ProductItem={mainDish.name}
                      ProductIMG={mainDish.img}
                    />
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        ) : (
          <EmptyMenu />
        )}
      </div>




      {/************************************************/}
      {/* ----------------SIDE DISH1------------------ */}
      {/************************************************/}
      <h3 className="my-7 text-center text-terc font-bold text-2xl">
        {" "}
        COMPLEMENTO 1{" "}
      </h3>

      <div id="SideDish1Cont" className="flex justify-center">
        {data?.sideDishes1?.length ? (
          <div className="flex items-center w-[80%] justify-center">
            <div className="container">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  {data?.sideDishes1.map((sid1) => (
                    // Encabezado de la tabla para cada producto
                    <ProductHeader key={sid1.id + "-side1"} />
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none text-[#414141]">
                  {data?.sideDishes1.map((side_dish1, id) => (
                    <ProductRow
                      active={side_dish1.active}
                      type={side_dish1.type}
                      key={side_dish1.id}
                      id={side_dish1.id}
                      ProductNum={id}
                      ProductItem={side_dish1.name}
                      ProductIMG={side_dish1.img}
                      ProductPrice={side_dish1.price}
                    />
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <EmptyMenu />
        )}
      </div>


      {/************************************************/}
      {/* ----------------SIDE DISH2------------------ */}
      {/************************************************/}
      <h3 className="my-7 text-center text-terc font-bold text-2xl">
        {" "}
        COMPLEMENTO 2{" "}
      </h3>
      <div id="SideDish2Cont" className="flex justify-center">
        {data?.sideDishes2?.length ? (
          <div className="flex items-center w-[80%] justify-center">
            <div className="container">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  {data?.sideDishes2.map((sid2) => (
                    // Encabezado de la tabla para cada producto
                    <ProductHeader key={sid2.id + "-side2"} />
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none text-[#414141]">
                  {data?.sideDishes2.map((side_dish2, id) => (
                    <ProductRow
                      active={side_dish2.active}
                      type={side_dish2.type}
                      key={side_dish2.id}
                      ProductNum={id}
                      id={side_dish2.id}
                      ProductItem={side_dish2.name}
                      ProductIMG={side_dish2.img}
                      ProductPrice={side_dish2.price}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <EmptyMenu />
        )}
      </div>

      {/************************************************/}
      {/* ---------------Acompañamientos-------------- */}
      {/************************************************/}

      <h3 className="my-7 text-center text-terc font-bold text-2xl ">
        {" "}
        ACOMPAÑANTES{" "}
      </h3>
      <div id="AcompCont" className="flex justify-center">
        {data?.accompaniments?.length ? (
          <div className="flex items-center w-[80%] justify-center">
            <div className="container">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  {data?.accompaniments.map((acc) => (
                    // Encabezado de la tabla para cada producto
                    <ProductHeader key={acc.id + "-acc"} />
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none text-[#414141]">
                  {data?.accompaniments.map((accompaniment, id) => (
                    <ProductRow
                      active={accompaniment.active}
                      key={accompaniment.id}
                      type={accompaniment.type}
                      id={accompaniment.id}
                      ProductNum={id}
                      ProductItem={accompaniment.name}
                      ProductIMG={accompaniment.img}
                      ProductPrice={accompaniment.price}
                    />
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <EmptyMenu />
        )}
      </div>

      {/************************************************/}
      {/* ------------------BEBIDAS------------------- */}
      {/************************************************/}

      <h3 className="my-7 text-center text-terc font-bold text-2xl">
        {" "}
        BEBIDAS{" "}
      </h3>

      <div id="DrinkCont" className="flex justify-center">
        {data?.drinks?.length ? (
          <div className="flex items-center w-[80%] justify-center">
            <div className="container">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  {data?.drinks.map((dri) => (
                    // Encabezado de la tabla para cada producto
                    <ProductHeader key={dri.id + "-drink"} />
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none text-[#414141]">
                  {data?.drinks.map((drink, id) => (
                    <ProductRow
                      active={drink.active}
                      key={drink.id}
                      type={drink.type}
                      id={drink.id}
                      ProductNum={id}
                      ProductItem={drink.name}
                      ProductIMG={drink.img}
                      ProductPrice={drink.price}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <EmptyMenu />
        )}
      </div>
    </div >
  );
}

export default ProductAdmin;
