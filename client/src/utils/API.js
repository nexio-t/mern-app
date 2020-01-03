import axios from "axios";

export default {
  
  // Search for videos 
  getYouTubeVideo: function(query) {
    return axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q="+ query + "&key=AIzaSyDkmcrvS7DR6DEF99WDcOYhXFC-2hO8KDA"); 
  },
  // Save a video
  saveVideo: function (newVideo) {
    return axios.post("/api/videos", newVideo);
  },
  // Get all saved videos 
  getSavedVideos: function() {
    return axios.get("/api/videos");
  },
  deleteVideo: function(id) {
    return axios.delete("/api/videos/" + id)
  }
};
