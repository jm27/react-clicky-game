
import React from "react";
function Element(props) {
  return (
    <img 
      id={props.id}
      value={props.value}
      onClick={props.onClick}
      className="img-thumbnail float-left  img-fluid w-100 h-100 "
      src={props.value}
      alt=""
    ></img>
  );
}
export default Element;