import React, { useState, useEffect } from "react";
import Threekit_Player from "./Player";
import "./Threekit.css";

const Threekit = (props) => {
  const { className, assetIdThreeD } = props;
 // const [playerModel, setPlayerModel] = useState(null);

  return (
    <>
      <div id="player-container">
        <Threekit_Player className={className} model={assetIdThreeD ? assetIdThreeD : 'c8f518e2-aca8-4564-8931-28aa2c5486bc'} />
      </div>
    </>
  );
};

export default Threekit;
