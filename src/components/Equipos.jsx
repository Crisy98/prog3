import React from "react";

const Cliente = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <div className=" bg-gray-700  pt-20 px-7">
      <table className="hover-table-fixed max-w-[700px] w-full mx-auto bg-gray-900 rounded-lg text-white text-center ,;">
        <thead className = "text-2x1 dark:text-white font-bold text-center">
          <tr className=" bg-gray-700  ">
            <th class="border border-slate-250 " >Nombre</th>
            <th class="border border-slate-250" >Apellido</th>
            <th class="border border-slate-250">Telefono</th>
            <th class="border border-slate-250">Email</th>
            <th class="border border-slate-250"></th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-600 ">Miguel Ángel </td>
            <td class="border border-slate-600 ">Parra </td>
            <td class="border border-slate-600 ">2932569</td>
            <td class="border border-slate-600 text-xs ">MiguelAngel@gmail.com</td>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button> 
            
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          <tr>
            <td class="border border-slate-600 ">Juan Carlos </td>
            <td class="border border-slate-600 ">Lopez</td>
            <td  class="border border-slate-600 ">2984123</td>
            <td  class="border border-slate-600 ">@gmail.com</td>
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          <tr>
            <td class="border border-slate-600 ">Luciano Martin</td>
            <td class="border border-slate-600 ">Velazques</td>
            <td class="border border-slate-600 ">3432345</td>
            <td  class="border border-slate-600 ">@gmail.com</td>
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          <tr>
            <td class="border border-slate-600 ">Patricio</td>
            <td class="border border-slate-600 ">Ordoñe</td>
            <td class="border border-slate-600 ">3431234</td>
            <td class="border border-slate-600 ">ElPati@gmail.com</td>
            
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-1 mb-2">Modificar</button>
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">Eliminar</button>
          </tr>
          
        </tbody>
      </table>
      </div>
      <div className="bg-gray-700 flex flex-col justify-center">

        <div className="bg-gray-700 flex flex-col justify-center container">
          <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-1 pl-12 px-10 rounded-lg">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              {" "}
              Crear Cliente
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Nombre</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="contraseña"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label> Apellido </label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="nomUsuario"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Telefono</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="contraseña"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="nomUsuario"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Genero</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="contraseña"
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
