import React, { useState, useEffect } from "react";
import Threekit_Player from "./Player";
import "./Threekit.css";

const Threekit = (props) => {
  const { className, assetIdThreeD } = props;
 // const [playerModel, setPlayerModel] = useState(null);

  return (
    <>
      <div id="player-container">
        <Threekit_Player className={className} model={assetIdThreeD} />
      </div>
    </>
  );
};

export default Threekit;
