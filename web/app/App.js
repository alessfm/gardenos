import React, { Component } from "react";
import "./App.css";
import Logo from "./assets/img/logos/logo-half.png"

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Olá!!</h1>
        <img src={Logo}></img>
      </div>
    );
  }
}

export default App;
