import React, {Component} from "react"; 
import API from "../utils/API";
import Searchbar from "../components/Searchbar";
import Container from "../components/Container";
import Card from "../components/Card"; 
import Columns from "../components/Columns";

class Home extends Component {

state = {
    search: "",
    videos: [],
    message: ""
}

handleInputChange = event => {

    console.log(event.target.value);
    this.setState({search: event.target.value});

}

handleSaveVideo = event => {
    event.preventDefault(); 
    console.log("the save registers");

    console.log(event.target.id); 

    let newSavedVid = this.state.videos.filter(item => item.videoId === event.target.id)
    newSavedVid = newSavedVid[0]; 
    console.log(newSavedVid);
    API.saveVideo(newSavedVid)
        .then(
            this.setState({message: "Your video was saved!"}))
        .catch(err => console.log(err)); 

}

handleFormSubmit = event => {

    event.preventDefault(); 
    // the API call will be here 

    API.getYouTubeVideo(this.state.search)
        .then( res => {
            // console.log(res);
            // console.log(res.data.items); 
         
                let videos = res.data.items; 

                videos = videos.map(result => {
                    // console.log(res.data.items[0].snippet.thumbnails.high.url)
                    // console.log(result); 

                    result = {
                        videoId: result.id.videoId,
                        title: result.snippet.title,
                        description: result.snippet.description,
                        thumbnail: result.snippet.thumbnails.high.url,
                        published: result.snippet.publishedAt,
                        channel: result.snippet.channelId
                    }
                    return result
                });
                this.setState({videos});
       

        })
        .catch( err => console.log(err)); 

}

render() {
    console.log(this.state);
    return (
        <Container>
            <Searchbar 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />   
            <Card videos={this.state.videos} handleSaveVideo={this.handleSaveVideo}/>
        </Container>
       
    )
}

}

export default Home; 