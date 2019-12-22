import React from "react"; 
import "./style.css"; 

function Card(props) {
    // console.log("props is", props);
    return (

        <div className="card col-8"> 
            
            <img id={props.id}/>
            <p></p>
            <p></p>
            <button/>
            <button/>
    
        </div>

    )

}

export default Card; 

