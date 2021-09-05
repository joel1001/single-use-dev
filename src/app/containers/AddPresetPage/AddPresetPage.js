import React, { useState, useEffect } from "react";
import Threekit from "../../components/Threekit/Threekit";
import PlayerPannel from "../PlayerPannel/PlayerPannel";
import ManifoldConfig from "../../components/ManifoldConfig/ManifoldConfig.js";
import logoBlack from "../../../assets/logo-black.png";
import Button from "../../components/Button/Button";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import "./AddPresetPage.css";

const AddPresetPage = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  const assetIdThreeD = sessionStorage.getItem("currentIdPresetOnFocusThreeD");
  return (
    <div className="container">
      <PlayerPannel className="player-button-black" iconClassName="icon-size-white" />
      <div className="preset-container">
        <Threekit className={!toggle ? "threekit-preview" : "threekit-preview-full-width"} assetIdThreeD={assetIdThreeD}/>
        <div className="logo">
          <img src={logoBlack} alt="logo" />
        </div>
        {toggle && <Button icon={<ArrowLeftOutlined className="icon-manifold" />} label={null} className="manifold-btn-rigth" onClickHandler={handleToggle} />}
      </div>
      {!toggle &&
        (
          <div className={!toggle ? "open manifold-container" : "close manifold-container"}>
            <ManifoldConfig />
            <Button icon={<ArrowRightOutlined className="icon-manifold" />} label={null} className="manifold-btn-left" onClickHandler={handleToggle} />
          </div>
        )
      }
    </div>
  )
}

export default AddPresetPage;