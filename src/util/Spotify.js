let accessToken = "";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for returned token & expire time in the address bar
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expiresIn = Number(urlExpiresIn[1]) * 1000;

      // Clear parameters & get another token after timeout
      window.setTimeout(() => (accessToken = ""), expiresIn);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const clientId = "c1abc4771ddb45a0a370b5e35e8234c2";
      const redirectUri = "http://wide-eyed-town.surge.sh";
      const endpoint = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played`;

      window.location = endpoint;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?q=${term}&type=track`;
    const headers = { Authorization: `Bearer ${accessToken}` };

    return fetch(endpoint, { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) =>
        jsonResponse.tracks.items.map((track) => {
          return {
            albumArt: track.album.images[1].url
              ? track.album.images[1].url
              : track.album.images[0].url,
            album: track.album.name,
            release: track.album.release_date,
            artist: track.artists[0].name,
            explicit: track.explicit,
            id: track.id,
            name: track.name,
            uri: track.uri,
            popularity: track.popularity,
          };
        })
      );
  },

  getPlaylists() {
    const accessToken = Spotify.getAccessToken();
    const endpoint = "https://api.spotify.com/v1/me/playlists?limit=50";
    const headers = { Authorization: `Bearer ${accessToken}` };

    return fetch(endpoint, { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) =>
        jsonResponse.items
          ? jsonResponse.items.map((playlist) => {
              return {
                coverImg: playlist.images[0].url,
                name: playlist.name,
                tracks: playlist.tracks,
                uri: playlist.uri,
                id: playlist.id,
                public: playlist.public,
              };
            })
          : []
      );
  },

  getPlaylistTracks(playlistId) {
    const accessToken = Spotify.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items.track`;
    const headers = { Authorization: `Bearer ${accessToken}` };

    return fetch(endpoint, { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) =>
        jsonResponse.items.map((item) => {
          return {
            albumArt: item.track.album.images[1].url
              ? item.track.album.images[1].url
              : item.track.album.images[0].url,
            album: item.track.album.name,
            release: item.track.album.release_date,
            artist: item.track.artists[0].name,
            explicit: item.track.explicit,
            id: item.track.id,
            name: item.track.name,
            uri: item.track.uri,
            popularity: item.track.popularity,
          };
        })
      );
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    let endpoint = "https://api.spotify.com/v1/me";
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch(endpoint, { headers: headers })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

        return fetch(endpoint, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => {
            return response.json();
          })
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            endpoint = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;

            return fetch(endpoint, {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ uris: trackUris }),
            });
          });
      });
  },
};

export default Spotify;
