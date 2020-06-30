let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    };

    // Check for returned token & expire time in the address bar
    const urlAccessToken  = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expiresIn = Number(urlExpiresIn[1]) * 1000;

      // Clear parameters & get another token after timeout
      window.setTimeout(() => accessToken = '', expiresIn);
      window.history.pushState('Access Token', null, '/');

      return accessToken;

    } else {
      const clientId     = 'c1abc4771ddb45a0a370b5e35e8234c2';
      const redirectUri  = 'http://localhost:3000'; 
      const resourceUrl  = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played`;

      window.location = resourceUrl;
    }
  },


}

export default Spotify;