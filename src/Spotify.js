
export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";

const clientId = 'a2a8e7f105a04503b5b7ec6d0c7a5b8a'


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read", 
    "user-modify-playback-state"
];


export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        },{})
}


export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;