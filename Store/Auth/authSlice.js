import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isLogedOut: true,
	authToken: "",
	userId: "",
};

const authSlice = createSlice({
	name: "Auth related activites.",
	initialState,
	reducers: {
		logIn: (state, actions) => {
			state.isLogedOut = false;
			state.authToken = actions.payload.authToken;
			state.userId = actions.payload.userId;
		},
		logOut: (state, actions) => {
			state.authToken = "";
			state.isLogedOut = true;
		},
	},
});

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;
