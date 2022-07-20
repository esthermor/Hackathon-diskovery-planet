import "./PlanetDescription.css";
import React, { useState } from "react";

import Modal from "../PlanetDescription_modal/index";

const PlanetDescription = () => {
  //to open popup
  const [popup, setPopup] = useState(false);
  //to indicate which planet is click
  const [index, setIndex] = useState(0);

  const planets = [
    {
      planet_name: "Sun",
      planet_id: "GSFC_20171208_Archive_e001435",
      index: 0,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/sun.png",
    },
    {
      planet_name: "Earth",
      planet_id: "PIA18033",
      index: 1,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png",
    },
    {
      planet_name: "Jupiter",
      planet_id: "PIA00343",
      index: 2,
      image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png",
    },
  ];

  const handleClickOpen = (index) => {
    setPopup(true);
    setIndex(index);
  };

  return (
    <div className="description_container">
      <div className="planet_animation">
        <div className="planets">
          {planets.map((items) => (
            <input
              type="image"
              src={items.image}
              key={items.planet_name}
              alt={items.planet_name}
              onClick={() => handleClickOpen(items.index)}
            />
          ))}
        </div>

        <Modal
          popup={popup}
          setPopup={setPopup}
          index={index}
          setIndex={setIndex}
          planets={planets}
        />
      </div>
    </div>
  );
};
export default PlanetDescription;
