import React from "react";
import Nav from "./Components/Nav";
import Wrapper from "./Components/Wrapper";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content-fluid">\
      {lost ? <Nav result={"You lost!"} /> : <Nav></Nav>}
        <Wrapper/>
      </div>
    </div>
  );
}

export default App;
