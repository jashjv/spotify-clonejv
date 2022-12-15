import { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login'
import Player from './player';
import { getTokenFromUrl } from './Spotify';


const spotify= new SpotifyWebApi()

function App() {

const [token,setToken]=useState(null)


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user,'aaa')
      })
    }

  }, [])



  return (
    <div> 
      {token ? ( <Player/> ):(<Login /> )}
    </div>
  );
}

export default App;
