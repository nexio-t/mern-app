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
    
render() {
    console.log(this.state); 
    return (
        <Container>
            <SavedCard savedVideos={this.state.savedVideos}/>
        </Container>
    )

}

}

export default SavedVideos; 