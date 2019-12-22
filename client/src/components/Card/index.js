import React from "react"; 
import "./style.css"; 

function Card (props) { 
    
    return (
    <div>
        {props.videos.map(item => { 
        return <div className="card col-3"> 
            <img src={item.thumbnail}/>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.published}</p>
            <a type="button" className="btn btn-primary" href={item.videoId} >Video </a>
            <a type="button" className="btn btn-primary" href={item.channelId}> Channel</a>
        </div>
        })}
    </div>
    )


}

export default Card; 

