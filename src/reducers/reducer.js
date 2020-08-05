export const initialState = {
	user: null,
	token:
		"BQBoYa6CgP5HHuTpFKHT-yrSOsJlt0aplX6BTQZH3EIVEVW6jbSjStB0FA-sfoEHsS0E5LErRG7ZZT1ZmKewTSXwIQkXu7Hzr64xrZytz3YhCHEdreAC5ldD2J-zL4lSJklIFhDJK518J_u2RkFN4PnW0SAAnfue1UlSp4qoU_U9jJhiyC6q",
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

		default:
			return state;
	}
};

export default reducer;
