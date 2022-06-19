import React from "react";
import Login from "./components/Login";
import Cliente from "./components/Cliente";
import Persona from "./components/Persona";
import { BrowserRouter as Router, Routes, Route, Link, Outlet  } from "react-router-dom";
import Navbar from "./components/Navbar";

const SidebarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  return (
    //<Login />
    <Router>
      {/* <h1>Todo oki</h1> */}
      <div className=" container inline-flex  ">
        {/* <div className="">
          <Link to="/cliente">
            <button className=" my-5 p-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">
              Cliente
            </button>
          </Link>
        </div>
        <div className="">
          <Link to="/planta">
            <button className=" my-5 p-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">
              Nodos
            </button>
          </Link>
        </div>
        <div className=" ">
          <Link to="/persona">
            <button className=" my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">
              Persona
            </button>
          </Link>
        </div>
        <div className=" ">
          <Link to="/sensor">
            <button className=" my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">
              Nodos
            </button>
          </Link>
        </div> */}
        <Routes>
          <Route element={<SidebarLayout/>}>
            <Route path="/cliente" element={<Cliente />}></Route>
            <Route path="/persona" element={<Persona />}></Route>
          </Route>
          <Route path="/" exact element={<Login /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
