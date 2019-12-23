import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'

function SavedCard(props) {
    console.log(props.savedVideos);
    return (
        // <div>Hello</div>
        <div>
            {props.savedVideos.map(item => {
                return  <div className="card ">
                    <div className="card-image">
                            <img src={item.thumbnail} />
                    </div>

                    <p id={item._id} onClick={(event) => props.handleVideoRemove(item._id)}>
                    <i id={item._id}  className="fas fa-trash-alt"></i>
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

export default SavedCard;

