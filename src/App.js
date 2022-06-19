import React from "react";
import Login from "./components/Login";
import Cliente from "./components/Cliente";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    
    //<Login />
    <Router>
      <h1>Todo oki</h1>
      <div  className=" container inline-flex  ">
        <div className="">
         <Link to="/cliente" >
         <button className=" my-5 p-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Cliente</button>
        </Link> 
        </div>
        <div className="">
         <Link to="/planta" >
         <button className=" my-5 p-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Nodos</button>
        </Link> 
        </div>
        <div className=" ">
         <Link to="/nodo"  >
          <button className=" my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Nodos</button>
          
        </Link> 
        </div>
        <div className=" ">
          <Link to="/sensor" >
            <button className=" my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Nodos</button>

           </Link> 
        </div>
      <Routes>
            <Route path="/" element={ <Login />}>
            </Route>
            <Route path="/cliente" element={ <Cliente />}>
            </Route>
        </Routes>   
      </div>
    </Router>
  );
}

export default App;
