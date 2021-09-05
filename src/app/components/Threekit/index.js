import React, { useState, useEffect } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import Threekit_Player from "./Player";

const Threekit = (props) => {
  const { className } = props;
  const [playerModel, setPlayerModel] = useState(null);

  return (
    <>
      <div id="player-container" className="p-0">
        <Threekit_Player className={className} model={playerModel} />
      </div>
      
    </>
  );
};

export default Threekit;
