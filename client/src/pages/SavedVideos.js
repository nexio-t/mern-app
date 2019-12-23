import React, {Component} from "react"; 
import API from "../utils/API";
import Container from "../components/Container";
import SavedCard from "../components/SavedCard";

class SavedVideos extends Component {

state = {
    savedVideos: []
};

componentDidMount () {
    API.getSavedVideos()
        .then(res => {
            console.log(res);
            this.setState({savedVideos: res.data});
        })
        .catch(err => console.log(err));
}

handleVideoRemove = id => {

    console.log("remove video registers"); 

    API.deleteVideo(id)
        .then(res => {
            console.log(res);
            this.componentDidMount();
        })
        .catch(err => console.log(err)); 

}
    
render() {
    console.log(this.state); 
    return (
        <Container>
            <SavedCard savedVideos={this.state.savedVideos} handleVideoRemove={this.handleVideoRemove}/>
        </Container>
    )

}

}

export default SavedVideos; 