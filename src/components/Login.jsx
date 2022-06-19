import React from "react";
import loginImg from "../assets/sensor.jpg";
import { useForm } from "react-hook-form";


<h1>hola</h1>
//  const Login = () => {
  export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

  return(
    
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt=""></img>
      </div>
      <div className='bg-gray-700 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'> Ingresar</h2>
          <div className='flex flex-col text-gray-400 py-2'> 
            <label>Nombre Usuario</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="nomUsuario" />
          </div>
          <div className='flex flex-col text-gray-400 py-2'> 
            <label>Contraseña</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name="contraseña" />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'>
              <input className='mr-2' type="checkbox" /> Recordarme
            </p>
            <p>Contraseña olvidada</p>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Ingresar</button>
        </form>
      </div>
    </div>
    </div>
  )
 }

// export default Login;
  
//   return (
    
    
//   );
  
// }
