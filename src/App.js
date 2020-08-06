import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useDataLayerValue } from "./containers/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				payload: {
					token: _token,
				},
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				// console.log("🙍", user);

				// Store the current logged user in Context
				dispatch({
					type: "SET_USER",
					payload: {
						user,
					},
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				// Store the playlist
				dispatch({
					type: "SET_PLAYLIST",
					payload: {
						playlists,
					},
				});
			});
		}
	}, []);

	// console.log("🙎: ", user);
	// console.log("👽: ", token);

	return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
