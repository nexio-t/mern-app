import axios from "axios";

export default {
  
  // Search for videos 
  getYouTubeVideo: function(query) {
    return axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q="+ query + "&key=AIzaSyAyOp0O_wd9CsT0kDl4REtZdaqgoQV0f6c"); 
  },
  saveVideo: function (newVideo) {
    return axios.post("/api/books", newVideo);
  }
};
