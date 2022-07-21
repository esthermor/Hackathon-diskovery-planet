import React from "react";
import "./StartQuizz.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function StartQuizz() {
  return (
    <div className="StartQuizzStyle">
      <Link className="StartQuizzButton" to="/miniquizz" activestyle="true">
        Mini Quizz
      </Link>
    </div>
  );
}
