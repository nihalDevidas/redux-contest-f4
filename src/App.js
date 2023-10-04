import React from "react";
import Hello from "./components/Hello";
import History from "./components/History";
import Nav from "./components/Nav";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Nav/>       

      <Routes>
        <Route path = "/"  element = {<Hello/>}/>
        <Route path="/history" element = {<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
