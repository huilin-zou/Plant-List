import React, { Fragment} from "react";
import "./App.css";
import { InputPlants } from "./components/InputPlants";
import { ListPlants } from "./components/ListPlants";
import { Login } from "./components/Login";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
        <Route path="/" element={<ListPlants />} />
        <Route path="/ListPlants" element={<ListPlants />} />
        <Route path="/Login" element={<Login />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
