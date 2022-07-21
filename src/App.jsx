import React from "react";
import "./App.css";
import Header from "./component/Header";
import MiniQuizz from "./component/MiniQuizz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlanetDescription from "./component/Description/PlanetDescription";
import NasaPhoto from "./component/POTD/nasaphoto";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<PlanetDescription />} />
        <Route path="/miniquizz" element={<MiniQuiz/>} />
        <Route path="/forum" element={<></>} />
        <Route path="/potd" element={<NasaPhoto />} />
      </Routes>
    </Router>
  )
}
export default App;
//<Route path="/nasaphoto" element={<NasaPhoto />}></Route>;
//  <BrowserRouter>
//     <div>
//       <Routes>
//         <Route path="/" element={<MainContainer />} />
//         <Route path="/potd" element={<NasaPhoto />} />
//       </Routes>
//     </div>
//   </BrowserRouter>
