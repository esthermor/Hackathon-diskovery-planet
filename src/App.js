import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/POTD/home";
import NasaPhoto from "./component/POTD/nasaphoto";
import "./App.css";
import Comments from "./component/forumcomment/Comments";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nasaphoto" element={<NasaPhoto />}>
            {/* <Route path="/nasaphoto" element={<NasaPhoto />} /> */}
          </Route>
        </Routes>
        {/* <Route component={home} path="/" exact />
        <Route component={nasaphoto} path="/nasaphoto" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

// const App = () => {
//   return (
//     <div>
//       <Comments commentsUrl="http://localhost:3001/forum" currentUserId="1" />
//     </div>
//   );
// };

// export default App;
