import React from "react";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./component/MainContainer.jsx";

//import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/miniquizz" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
