import React from "react";

const Cliente = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <div className=" bg-gray-700  pt-20 px-7">
      <table className="hover-table-fixed max-w-[700px] w-full mx-auto bg-gray-900 rounded-lg text-white text-center ,;">
        <thead className = "text-2x1 dark:text-white font-bold text-center">
          <tr className=" bg-gray-700  ">
            <th class="border border-slate-250 " >Nodo</th>
            <th class="border border-slate-250" >Hora</th>
            <th class="border border-slate-250">Valor</th>
            <th class="border border-slate-250">Unidad</th>
            <th class="border border-slate-250"></th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-600 ">Nodo01 </td>
            <td class="border border-slate-600 ">00:00:00 </td>
            <td class="border border-slate-600 ">Valor01</td>
            <td class="border border-slate-600 text-xs ">Unidad01</td>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button> 
            
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          <tr>
            <td class="border border-slate-600 ">Nodo02 </td>
            <td class="border border-slate-600 ">00:00:00</td>
            <td  class="border border-slate-600 ">Valor02</td>
            <td  class="border border-slate-600 ">Unidad02</td>
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          <tr>
            <td class="border border-slate-600 ">Nodo03</td>
            <td class="border border-slate-600 ">00:00:00</td>
            <td class="border border-slate-600 ">Valor03</td>
            <td  class="border border-slate-600 ">Unidad03</td>
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          <tr>
            <td class="border border-slate-600 ">Nodo04</td>
            <td class="border border-slate-600 ">00:00:00</td>
            <td class="border border-slate-600 ">Valor04</td>
            <td class="border border-slate-600 ">Unidad04</td>
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>   
          
        </tbody>
      </table>
      </div>
      <div className="bg-gray-700 flex flex-col justify-center">

        <div className="bg-gray-700 flex flex-col justify-center container">
          <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-1 pl-12 px-10 py-12 rounded-lg">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              {" "}
              Crear Sensor
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Nodo</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="contraseña"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label> Hora </label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="nomUsuario"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Valor</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="contraseña"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Unidad</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="nomUsuario"
              />
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Cliente;
