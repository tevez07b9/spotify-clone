export const initialState = {
	user: null,
	token:
		"BQAhkmnt-_IZdqOaolkKcNvBpgoMZAg5WNYrpcwkHkHP1kZQU4W50MQfHh6W9QGOuXrINQ1XxIlpPa4NPBQqc73Bf1igoXDZDO-MOdRpwG9wLMBP9sb6WFC4T76c2Q8sGpatprQ7IGjNhRFeE61cHwiHdiPTtmPYUNDpnC04bmgP7jb0mgOM",
	playlists: [],
	playing: false,
	item: null,
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.payload.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.payload.token,
			};

		case "SET_PLAYLIST":
			return {
				...state,
				playlists: action.payload.playlists,
			};

		default:
			return state;
	}
};

export default reducer;
