// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const clientId = "bdfd8b0a063648ba9c1745705bba4692";
export const authEndpoint = "https://accounts.spotify.com/authorize";
export const redirectUri = "http://localhost:3000/";

export const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};
