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
    },
    { planet_name: "Earth", planet_id: "PIA18033", index: 1 },
    { planet_name: "Jupiter", planet_id: "PIA00343", index: 2 },
  ];

  const handleClickOpen = (index) => {
    setPopup(true);
    setIndex(index);
  };

  return (
    <div className="description_container">
      <div className="planet_animation">
        {planets.map((items) => (
          <button
            key={items.planet_name}
            onClick={() => handleClickOpen(items.index)}
          >
            {items.planet_name}
          </button>
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
  );
};
export default PlanetDescription;
