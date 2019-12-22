import axios from "axios";

export default {
  
  // Search for videos 
  getYouTubeVideo: function(query) {
    return axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+ query + "&key=AIzaSyAyOp0O_wd9CsT0kDl4REtZdaqgoQV0f6c"); 
  },
  // Fetches all videso 
  getAllVideos: function () {
    return axios.get("/api/videos");
  },
  // Fetch video by ID 
  getVideo: function (id) {
    return axios.get("/api/videos/" + id);
  },
  saveVideo: function (newVideo) {
    return axios.post("/api/videos", newVideo);
  },
  deleteVideo: function (id) {
    return axios.delete("/api/videos/" + id);
  }
};
