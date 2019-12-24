import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'


function ResultsContainer(props) {
  return <div className="results-container">{props.children}</div>;
}

export default ResultsContainer;
