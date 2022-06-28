import loginImg from "../assets/sensor.jpg";
//import { useForm } from "react-hook-form";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cliente from "./Cliente";
import Persona from "./Persona";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";

// import "./styles.css";
const SidebarLayout = () => (
  <>
    <Navbar />
    {/* <Cliente /> */}
    <Outlet />
  </>
);
function Login2() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
    {
      username: "1",
      password: "1",
    },
  ];

  const errors = {
    uname: "Usuario Incorrecto",
    pass: "Contraseña Incorrecta",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
 
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src={loginImg}
            alt=""
          ></img>
        </div>
        <div className="bg-gray-700 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              {" "}
              Ingresar
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Nombre Usuario</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="uname"
                required
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Contraseña</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="pass"
                required
              />
              {renderErrorMessage("pass")}
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Recordarme
              </p>
              <p>Contraseña olvidada</p>
            </div>
            <div className="  ">
              <input className="text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-950 font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2 w-full my-5 py-2" type="submit" />
              {/* <input className=" w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg " type="submit" /> */}
              {/* "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" */}
            </div>
            {/* <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Ingresar</button> */}
          </form>
        </div>
      </div>
    </div>
    // <div className="form">
    //   <form onSubmit={handleSubmit}>
    //     <div className="input-container">
    //       <label>Username </label>
    //       <input type="text" name="uname" required />
    //       {renderErrorMessage("uname")}
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input type="password" name="pass" required />
    //       {renderErrorMessage("pass")}
    //     </div>
    //     <div className="button-container">
    //       <input type="submit"  />
    //     </div>
    //   </form>
    // </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <Navigate to="/cliente" /> : renderForm}
      </div>
    </div>
  );
}

export default Login2;