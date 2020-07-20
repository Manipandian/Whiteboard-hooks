import React from "react";
import "./Controls.css";
import Color from "../Color/Color";
import Write from "../Write/Write";
import Eraser from "../Eraser/Eraser";
import Reset from "../Reset/Reset";

function Controls(props) {
  return (
    <div className="controls">
      <Color handleColor={props.handleColor} />
      <Write startWrite={props.startWrite} />
      <Eraser setEraseState={props.setEraseState} />
      <Reset resetPage={props.resetPage}/>
    </div>
  );
}

export default Controls;
