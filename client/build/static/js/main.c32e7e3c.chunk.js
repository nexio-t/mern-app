(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(29),c=a.n(l),r=a(9),o=a(10),s=a(12),d=a(11),u=a(13),m=(a(38),a(30)),v=a(6),h=a(15),p=a.n(h),f={getYouTubeVideo:function(e){return p.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q="+e+"&key=AIzaSyAyOp0O_wd9CsT0kDl4REtZdaqgoQV0f6c")},saveVideo:function(e){return p.a.post("/api/videos",e)},getSavedVideos:function(){return p.a.get("/api/videos")},deleteVideo:function(e){return p.a.delete("/api/videos/"+e)}},b=(a(56),a(8),function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"distractify"},"Distractify"),i.a.createElement("form",null,i.a.createElement("div",{className:"field"},i.a.createElement("br",null),i.a.createElement("input",{className:"input",value:e.search,type:"text",name:"searchVideo",placeholder:"Enter search term here",onChange:e.handleInputChange})),i.a.createElement("button",{type:"submit",className:"button is-light",onClick:e.handleFormSubmit},"Submit")))});a(57);var g=function(e){return i.a.createElement("div",{className:"container"},e.children)};a(58);var E=function(e){return i.a.createElement("div",null,e.videos.map(function(t){return i.a.createElement("div",{className:"card "},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"vid-display",src:t.thumbnail})),i.a.createElement("p",{id:t.videoId,onClick:function(t){return e.handleSaveVideo(t)}},i.a.createElement("i",{id:t.videoId,className:"fas fa-plus-circle saveBtn"})),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"vid-title"},t.title),i.a.createElement("a",{type:"button",className:"button is-primary is-light",href:t.videoId},"Video "),i.a.createElement("a",{type:"button",className:"button button is-link is-light",href:t.channelId}," Channel")))}))};a(59);var N=function(e){return i.a.createElement("div",{className:"results-container"},e.children)},y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",videos:[],message:""},a.handleInputChange=function(e){console.log(e.target.value),a.setState({search:e.target.value})},a.handleSaveVideo=function(e){e.preventDefault(),console.log("the save registers"),console.log(e.target.id);var t=a.state.videos.filter(function(t){return t.videoId===e.target.id});t=t[0],console.log(t),f.saveVideo(t).then(a.setState({message:"Your video was saved!"})).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),f.getYouTubeVideo(a.state.search).then(function(e){var t=e.data.items;t=t.map(function(e){return e={videoId:e.id.videoId,title:e.snippet.title,description:e.snippet.description,thumbnail:e.snippet.thumbnails.high.url,published:e.snippet.publishedAt,channel:e.snippet.channelId}}),a.setState({videos:t})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.state),i.a.createElement(g,null,i.a.createElement(b,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),i.a.createElement(N,null,i.a.createElement(E,{videos:this.state.videos,handleSaveVideo:this.handleSaveVideo})))}}]),t}(n.Component);a(60);var V=function(e){return console.log(e.savedVideos),i.a.createElement("div",null,e.savedVideos.map(function(t){return i.a.createElement("div",{className:"card "},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"vid-display",src:t.thumbnail})),i.a.createElement("p",{id:t._id,onClick:function(a){return e.handleVideoRemove(t._id)}},i.a.createElement("i",{id:t._id,className:"fas fa-trash-alt"})),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"vid-title"},t.title),i.a.createElement("a",{type:"button",className:"button is-primary is-light",href:t.videoId},"Video "),i.a.createElement("a",{type:"button",className:"button button is-link is-light",href:t.channelId}," Channel")))}))},O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={savedVideos:[]},a.handleVideoRemove=function(e){console.log("remove video registers"),f.deleteVideo(e).then(function(e){console.log(e),a.componentDidMount()}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.getSavedVideos().then(function(t){console.log(t),e.setState({savedVideos:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return console.log(this.state),i.a.createElement(g,null,i.a.createElement("div",{className:"distractify"},"Distractify"),i.a.createElement(V,{savedVideos:this.state.savedVideos,handleVideoRemove:this.handleVideoRemove}))}}]),t}(n.Component);var S=function(){return i.a.createElement("html",{class:"has-navbar-fixed-top"},i.a.createElement("nav",{className:"navbar is-fixed-top is-warning",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement("a",{className:"navbar-item",href:"/"},"Home ",i.a.createElement("span",{className:"sr-only"})),i.a.createElement("a",{className:"navbar-item",href:"/saved"},"Saved Videos")))))},I=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(S,null),i.a.createElement(v.c,null,i.a.createElement(v.a,{exact:!0,path:"/",component:y}),i.a.createElement(v.a,{exact:!0,path:"/saved",component:O})))}}]),t}(n.Component);c.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c32e7e3c.chunk.js.map