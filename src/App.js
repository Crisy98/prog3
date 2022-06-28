import React from "react";
import Login2 from "./components/Login2";
import Cliente from "./components/Cliente";
import Planta from "./components/Planta";
import Equipos from "./components/Equipos";
import Nodo from "./components/Nodo";
import Sensor from "./components/Sensor";
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
    <Router>
      <div className=" container inline-flex  ">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/cliente" element={<Cliente />}></Route>
            <Route path="/persona" element={<Persona />}></Route>
            <Route path="/planta" element={<Planta />}></Route>
            <Route path="/equipos" element={<Equipos />}></Route>
            <Route path="/nodo" element={<Nodo />}></Route>
            <Route path="/sensor" element={<Sensor />}></Route>
          </Route>
          <Route path="/" exact element={<Login2 /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
