import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/POTD/home";
import NasaPhoto from "./component/POTD/nasaphoto";
import "./App.css";
import Comments from "./component/forumcomment/Comments";

const App = () => {
  return (
    <div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
