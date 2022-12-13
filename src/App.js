import { useEffect,useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './Spotify';

function App() {

const [token,setToken]=useState(null)


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

  }, [])



  return (
    <div> 
      {token ?(  <h1>i am loged in</h1>) :(<Login /> )}
    </div>
  );
}

export default App;
