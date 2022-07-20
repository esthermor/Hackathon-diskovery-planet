import "./header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="branding">Diskovery Planet</div>
      <div className="menu-buttons">
        <Link to="/">Main Page</Link>
        <Link to="/miniquizz">Mini Quizz</Link>
      </div>
    </nav>
  );
};

export default Header;
