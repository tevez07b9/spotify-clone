import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
			spotify.getMe();
		}

		console.log("token: ", token);
	}, []);

	return (
		<div className="app">{token ? <h1>I am logged in!</h1> : <Login />}</div>
	);
}

export default App;
