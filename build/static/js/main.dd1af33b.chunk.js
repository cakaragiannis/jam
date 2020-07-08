(this.webpackJsonpjam=this.webpackJsonpjam||[]).push([[0],[,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),c=(a(13),a(4)),s=a(5),u=a(7),o=a(6),m=(a(14),""),h={getAccessToken:function(){if(m)return m;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){m=e[1];var a=1e3*Number(t[1]);return window.setTimeout((function(){return m=""}),a),window.history.pushState("Access Token",null,"/"),m}var n="https://accounts.spotify.com/authorize?client_id=".concat("c1abc4771ddb45a0a370b5e35e8234c2","&response_type=token&redirect_uri=").concat("http://wide-eyed-town.surge.sh","&scope=playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played");window.location=n},search:function(e){var t=h.getAccessToken(),a="https://api.spotify.com/v1/search?q=".concat(e,"&type=track"),n={Authorization:"Bearer ".concat(t)};return fetch(a,{headers:n}).then((function(e){return e.json()})).then((function(e){return e.tracks.items.map((function(e){return{albumArt:e.album.images[1].url?e.album.images[1].url:e.album.images[0].url,album:e.album.name,release:e.album.release_date,artist:e.artists[0].name,explicit:e.explicit,id:e.id,name:e.name,uri:e.uri,popularity:e.popularity}}))}))},getPlaylists:function(){var e=h.getAccessToken(),t={Authorization:"Bearer ".concat(e)};return fetch("https://api.spotify.com/v1/me/playlists?limit=50",{headers:t}).then((function(e){return e.json()})).then((function(e){return e.items?e.items.map((function(e){return{coverImg:e.images[0].url,name:e.name,tracks:e.tracks,uri:e.uri,id:e.id,public:e.public}})):[]}))},getPlaylistTracks:function(e){var t=h.getAccessToken(),a="https://api.spotify.com/v1/playlists/".concat(e,"/tracks?fields=items.track"),n={Authorization:"Bearer ".concat(t)};return fetch(a,{headers:n}).then((function(e){return e.json()})).then((function(e){return e.items.map((function(e){return{albumArt:e.track.album.images[1].url?e.track.album.images[1].url:e.track.album.images[0].url,album:e.track.album.name,release:e.track.album.release_date,artist:e.track.artists[0].name,explicit:e.track.explicit,id:e.track.id,name:e.track.name,uri:e.track.uri,popularity:e.track.popularity}}))}))},savePlaylist:function(e,t){if(e&&t.length){var a,n=h.getAccessToken(),l="https://api.spotify.com/v1/me",r={Authorization:"Bearer ".concat(n)};return fetch(l,{headers:r}).then((function(e){return e.json()})).then((function(n){return a=n.id,l="https://api.spotify.com/v1/users/".concat(a,"/playlists"),fetch(l,{headers:r,method:"POST",body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){var n=e.id;return l="https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),fetch(l,{headers:r,method:"POST",body:JSON.stringify({uris:t})})}))}))}}},p=h;a(15);var f=function(e){return l.a.createElement("div",{className:"Banner"},l.a.createElement("ul",null,l.a.createElement("li",null,"SLOW"),l.a.createElement("li",null,"PARTY"),l.a.createElement("li",null,"YOUR"),l.a.createElement("li",null,"OFFICE"),l.a.createElement("li",null,"PUMP")),l.a.createElement("h1",null,"JAM."))};a(16);var y=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("h1",null,"JAM."),l.a.createElement("p",null,"for ",l.a.createElement("span",null,"Spotify"),l.a.createElement("sup",null,"\xa9")),l.a.createElement("p",{className:"hidden"},"Easy playlist creation for the world's favourite streaming service."),e.isAuth?"":l.a.createElement("button",{onClick:e.connect},"CONNECT")))};a(17);var d=function(e){return l.a.createElement("div",{className:"SearchBar"},l.a.createElement("input",{placeholder:"Search track, artist or album...",onChange:function(t){return e.onTermChange(t.target.value)}}))};a(2);var E=function(e){return l.a.createElement("div",{className:"Track"},l.a.createElement("img",{className:"cover",alt:e.track.album,src:e.track.albumArt}),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,e.track.name)),l.a.createElement("tr",null,l.a.createElement("td",null,e.track.album)),l.a.createElement("tr",null,l.a.createElement("td",null,e.track.artist)),l.a.createElement("tr",null,l.a.createElement("td",null,e.track.release.slice(0,4),e.track.explicit?l.a.createElement("span",null,"EXPLICIT"):"",e.track.popularity>70?l.a.createElement("span",null,"POPULAR"):"")))),e.isRemoval?l.a.createElement("button",{onClick:function(){return e.onRemove(e.track)}},"\xd7"):l.a.createElement("button",{onClick:function(){return e.onAdd(e.track)}},"+"))};var k=function(e){return l.a.createElement("div",null,l.a.createElement("span",null,"Search"),e.isAuth?l.a.createElement("div",null,l.a.createElement(d,{onTermChange:function(t){return e.onTermChange(t)}}),e.searchResults.map((function(t){return l.a.createElement(E,{track:t,key:t.id,onAdd:function(t){return e.onAdd(t)}})}))):l.a.createElement("div",null,l.a.createElement("h2",null,"Search"),l.a.createElement("p",null,"Find new and existing favourites with access to Spotify",l.a.createElement("sup",null,"\xa9"),"'s entire collection of over 50 million songs, albums and podcasts.")))};var v=function(e){return l.a.createElement("div",null,l.a.createElement("span",null,"Create"),e.isAuth?l.a.createElement("div",null,l.a.createElement("input",{placeholder:"New JAM...",onChange:function(t){return e.onNameChange(t.target.value)}}),l.a.createElement("div",null,e.playlistTracks.map((function(t){return l.a.createElement(E,{track:t,key:t.id,isRemoval:!0,onRemove:function(t){return e.onRemove(t)}})}))),e.playlistTracks.length>0?l.a.createElement("button",{className:"saveBtn",onClick:e.onSave},"Save to Spotify"):""):l.a.createElement("div",null,l.a.createElement("h2",null,"Create & Export"),l.a.createElement("p",null,"Craft the perfect soundtrack for any situation, on any device, anywhere. When you're done, export your masterpiece with just one click.")))};a(18);var g=function(e){return l.a.createElement("div",{className:"Playlist"},l.a.createElement("img",{className:"cover",alt:e.playlist.name,src:e.playlist.coverImg}),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,e.playlist.name)),l.a.createElement("tr",null,l.a.createElement("td",null,e.playlist.tracks.total>1?"".concat(e.playlist.tracks.total," tracks"):"".concat(e.playlist.tracks.total," track"))),l.a.createElement("tr",null,l.a.createElement("td",null,!1===e.public?"Private playlist":"Public playlist")))),l.a.createElement("button",{onClick:function(){return e.onImport(e.playlist.name,e.playlist.id)}},"\u2630"))};var A=function(e){return l.a.createElement("div",{className:"PlaylistsPane"},l.a.createElement("span",null,"Playlists"),e.isAuth?l.a.createElement("div",null,l.a.createElement("h2",null,"Playlists on Spotify",l.a.createElement("sup",null,"\xa9")),e.spotifyPlaylists.map((function(t){return l.a.createElement(g,{playlist:t,key:t.id,onImport:function(t,a){return e.onImport(t,a)}})})),l.a.createElement("button",{className:"refreshBtn",onClick:function(){return e.onRefresh()}},"Refresh")):l.a.createElement("div",null,l.a.createElement("h2",null,"Import"),l.a.createElement("p",null,"JAM automatically imports up to 50 existing playlists. Use any playlist as a starting point for your new jam while preserving the old one.")))};a(19);var b=function(e){return l.a.createElement("footer",null,e.isAuth?l.a.createElement("p",null,"Digging JAM.? ",l.a.createElement("a",{href:"https://github.com/cakaragiannis/jam"},"Check out the source code.")):l.a.createElement("p",null,"Connect Spotify",l.a.createElement("sup",null,"\xa9")," to get started."))},T=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isAuth:!1,searchResults:[],playlistName:"",playlistTracks:[],spotifyPlaylists:[]},n}return Object(s.a)(a,[{key:"getAccessToken",value:function(){p.getAccessToken(),this.setState({isAuth:!0}),this.getPlaylists()}},{key:"search",value:function(e){var t=this;p.search(e).then((function(e){return t.setState({searchResults:e})}))}},{key:"getPlaylists",value:function(){var e=this;p.getPlaylists().then((function(t){return e.setState({spotifyPlaylists:t})}))}},{key:"getPlaylistTracks",value:function(e,t){var a=this;p.getPlaylistTracks(t).then((function(e){return a.setState({playlistTracks:e})}))}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"addTrack",value:function(e){var t=this.state.playlistTracks?this.state.playlistTracks:[];if(t.find((function(t){return t.id===e.id})))alert("Track already added.");else{t.push(e);var a=this.state.searchResults.filter((function(t){return t.id!==e.id}));this.setState({playlistTracks:t,searchResults:a})}}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks.filter((function(t){return t!==e}));this.setState({playlistTracks:t})}},{key:"savePlaylist",value:function(e){if(this.state.playlistName){var t=this.state.playlistTracks.map((function(e){return e.uri})),a=this.state.playlistName;p.savePlaylist(a,t),this.setState({playlistName:"",playlistTracks:[]}),document.querySelectorAll("input")[1].value=""}else alert("You didn't name your JAM.")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.state.isAuth?"App":"App unauth"},l.a.createElement(y,{isAuth:this.state.isAuth,connect:function(){return e.getAccessToken()}}),this.state.isAuth?"":l.a.createElement(f,null),l.a.createElement("main",null,l.a.createElement(k,{isAuth:this.state.isAuth,onTermChange:function(t){return e.search(t)},searchResults:this.state.searchResults,onAdd:function(t){return e.addTrack(t)}}),l.a.createElement(v,{isAuth:this.state.isAuth,onNameChange:function(t){return e.updatePlaylistName(t)},playlistTracks:this.state.playlistTracks,onRemove:function(t){return e.removeTrack(t)},onSave:function(){return e.savePlaylist()}}),l.a.createElement(A,{isAuth:this.state.isAuth,spotifyPlaylists:this.state.spotifyPlaylists,onRefresh:function(){return e.getPlaylists()},onImport:function(t,a){return e.getPlaylistTracks(t,a)}})),l.a.createElement(b,{isAuth:this.state.isAuth}))}}]),a}(l.a.Component);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.dd1af33b.chunk.js.map