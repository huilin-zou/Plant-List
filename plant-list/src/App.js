import React, { Fragment } from "react";
import "./App.css";
import { InputPlants } from "./components/InputPlants";
import { ListPlants } from "./components/ListPlants";

function App() {
  return (
    <Fragment>
      <div className="container">
     
        <InputPlants></InputPlants>
        <ListPlants></ListPlants>
        
      </div>
    </Fragment>
  );
}

export default App;
