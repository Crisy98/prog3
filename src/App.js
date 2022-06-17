import React from "react";
import Login from "./components/Login";
import Cliente from "./components/Cliente";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    
    //<Login />
    <Router>
      <h1>Todo oki</h1>
      <div  >
        <div >
         <Link to="/cliente" >
          buenas
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
