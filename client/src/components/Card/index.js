import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'

function Card(props) {

    return (
        <div>
            {props.videos.map(item => {
                return  <div className="card ">
                    <div className="card-image">
                            <img src={item.thumbnail} />
                    </div>

                    <p id={item.videoId} onClick={(event) => props.handleSaveVideo(event)}>
                    <i id={item.videoId} className="fas fa-plus-circle"></i>
                    </p>

                    <div className="card-content">
                        <p className="vid-title">{item.title}</p>
                        {/* <p>{item.description}</p> */}
                        {/* <p>{item.published}</p> */}
                        <a type="button" className="button is-primary is-light" href={item.videoId} >Video </a>
                        <a type="button" className="button button is-link is-light" href={item.channelId}> Channel</a>
                    </div>
                </div>
            })}
        </div>
    )


}

export default Card;

