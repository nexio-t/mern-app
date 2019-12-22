import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'


function Columns(props) {
  return <div className="columns">{props.children}</div>;
}

export default Columns;
