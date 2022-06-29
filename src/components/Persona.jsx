import React from "react";
const Persona = () => {
  return (
    <div>
      <div className="sm:grid-cols-2 w-screen h-full">
        {/* <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt=""></img>
      </div> */}

        <div className="bg-gray-700 flex flex-col justify-center container">
          <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 py-12 rounded-lg">
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
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Persona;
