import React, { useState, useEffect } from "react";
import loadjs from "loadjs";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import { ThreekitSetSinglePlayerLoadingStatus, ThreekitSelectModel, ThreekitInitCameraValues, ThreekitFetchModels } from '../../redux/Threekit/actions';

const Threekit_Player = (props) => {

  const { idSelector, model } = props;
  const [playerConfiguration, setPlayerConfiguration] = useState(null);
  const [playerImgSnap, setPlayerImgSnap] = useState('');

  const state = useSelector((store) => {
    return {
      Meta: store.Meta,
      Config: store.Config,
    };
  });

  const actions = useActions({
    ThreekitSetSinglePlayerLoadingStatus,
    ThreekitSelectModel,
    ThreekitFetchModels,
    ThreekitInitCameraValues
  });

  useEffect(() => {
    actions.ThreekitSetSinglePlayerLoadingStatus(true);
    actions.ThreekitInitCameraValues(true);
    loadjs(state.Config.threekitScriptURL);
    window
      .threekitPlayer({
        authToken: state.Config.threekitAuthToken,
        el: idSelector ? document.getElementById(idSelector) : document.getElementById("player-container"),
        assetId: model ? model : 'd44c3e8d-f766-4806-bc06-5686c4b2500b',
        orgId: state.Config.threekitOrgId,
        showConfigurator: false,
        showAR: false,
        showLoadingThumbnail: true,
        //publishStage: 'draft',
      })
      .then(async (api) => {
        api.enableApi("configurator");
        api.enableApi("player");
        api.enableApi("store");
        //let metadata = window.threeDPlayer.configurator.getMetadata().categories ? window.threeDPlayer.configurator.getMetadata().categories : undefined;
        //metadata = metadata ? JSON.parse(metadata) : undefined;
        // console.log('metadata', metadata)
        //const number = 10;
        //await twoD.camera.zoom(number);
      
        if(idSelector == 'threekit-embed'){
          window.twoDPlayer = api;
        }
        else {
          window.threeDPlayer = api;
          window.threeDPlayer.configurator = await api.getConfigurator();  
          debugger
        }
        //await api.when("loaded");

        //api.tools.setTool('orbit', { options: { turnTableMobileOnly: false } });
        
        // api.selectionSet.setStyle({ outlineColor: "#B49F7D" });

        // window.roomBuilder = {};
        // window.roomBuilder.clickedComponent = null;
        // window.roomBuilder.api = api;
        // window.roomBuilder.api.configurator = await api.getConfigurator();

        /*  
          TODO: Crear m??todo para configuraci??n inicial de modelo, en caso
          de ser requerido
        
          window.roomBuilder.api.configurator.setConfiguration({
            "Cup Holder": "Black",
          });
        */
        // setPlayerConfiguration(window.roomBuilder.api.configurator);
        // actions.ThreekitSetSinglePlayerLoadingStatus(false);

        // let attributeName = "Component 1";
        // let player = await window.roomBuilder.api.enableApi("player");
        // let parentConfigurator = await player.getConfigurator();
    
        // let values = parentConfigurator.getDisplayAttributes().filter(e => e.name == "Component 1")[0].values;
    
        // let value = values.filter(e => e.assetId == parentConfigurator.configuration["Component 1"].assetId)[0];

        // actions.ThreekitSelectModel(value) 
      });
  }, []);

  // const shouldShowSinglePlayer = () => {
  //   return true;
  //   let shouldShow = false;

  //   if (state.Meta.currentActivity == 1) {
  //     shouldShow = true;
  //   }

  //   return shouldShow;
  // }

  // const shouldShowRoomBuilderPlayer = () => {
  //   return true;
  //   let shouldShow = false;

  //   if (state.Meta.currentActivity == 2) {
  //     shouldShow = true;
  //   }

  //   return shouldShow;
  // }

  return (
    <div id="player">
      {/* <div id="player-preview" hidden={ !shouldShowSinglePlayer() } className={className}></div>
      <div id="room-builder-preview" hidden={ !shouldShowRoomBuilderPlayer() }  className={className}></div> */}
    </div>
  );
};

export default Threekit_Player;
