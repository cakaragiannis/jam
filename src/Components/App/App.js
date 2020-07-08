import React from "react";
import "./App.css";

import Spotify from "../../util/Spotify";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import SearchPane from "../SearchPane/SearchPane";
import CreatePane from "../CreatePane/CreatePane";
import PlaylistsPane from "../PlaylistsPane/PlaylistsPane";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      searchResults: [],
      playlistName: "",
      playlistTracks: [],
      spotifyPlaylists: [],
    };
  }

  getAccessToken() {
    Spotify.getAccessToken();
    this.setState({
      isAuth: true,
    });
    this.getPlaylists();
  }

  search(term) {
    Spotify.search(term).then((searchResults) =>
      this.setState({ searchResults: searchResults })
    );
  }

  getPlaylists() {
    Spotify.getPlaylists().then((spotifyPlaylists) =>
      this.setState({ spotifyPlaylists: spotifyPlaylists })
    );
  }

  getPlaylistTracks(playlistName, playlistId) {
    Spotify.getPlaylistTracks(playlistId).then((playlistTracks) =>
      this.setState({ playlistTracks: playlistTracks })
    );
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  addTrack(track) {
    const playlistTracks = this.state.playlistTracks
      ? this.state.playlistTracks
      : [];

    if (playlistTracks.find((playlistTrack) => playlistTrack.id === track.id)) {
      alert("Track already added.");
      return;
    }

    playlistTracks.push(track);
    const searchResults = this.state.searchResults.filter(
      (result) => result.id !== track.id
    );

    this.setState({
      playlistTracks: playlistTracks,
      searchResults: searchResults,
    });
  }

  removeTrack(track) {
    const playlistTracks = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack !== track
    );

    this.setState({
      playlistTracks: playlistTracks,
    });
  }

  savePlaylist(name) {
    if (this.state.playlistName) {
      const trackUris = this.state.playlistTracks.map((track) => track.uri);
      const name = this.state.playlistName;

      Spotify.savePlaylist(name, trackUris);
      this.setState({
        playlistName: "",
        playlistTracks: [],
      });
      document.querySelectorAll("input")[1].value = "";
    } else {
      alert("You didn't name your JAM.");
    }
  }

  render() {
    return (
      <div className={this.state.isAuth ? "App" : "App unauth"}>
        <Header
          isAuth={this.state.isAuth}
          connect={() => this.getAccessToken()}
        />
        {this.state.isAuth ? "" : <Banner />}
        <main>
          <SearchPane
            isAuth={this.state.isAuth}
            onTermChange={(term) => this.search(term)}
            searchResults={this.state.searchResults}
            onAdd={(track) => this.addTrack(track)}
          />
          <CreatePane
            isAuth={this.state.isAuth}
            onNameChange={(name) => this.updatePlaylistName(name)}
            playlistTracks={this.state.playlistTracks}
            onRemove={(track) => this.removeTrack(track)}
            onSave={() => this.savePlaylist()}
          />
          <PlaylistsPane
            isAuth={this.state.isAuth}
            spotifyPlaylists={this.state.spotifyPlaylists}
            onRefresh={() => this.getPlaylists()}
            onImport={(playlistName, playlistId) =>
              this.getPlaylistTracks(playlistName, playlistId)
            }
          />
        </main>
        <Footer isAuth={this.state.isAuth} />
      </div>
    );
  }
}

export default App;
