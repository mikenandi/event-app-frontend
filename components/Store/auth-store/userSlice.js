import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	token: "",
	email: "",
};

const userSlice = createSlice({
	name: "store for user data in authentication",
	initialState,
	reducers: {
		saveToken: (state, actions) => {
			state.token = actions.payload;
		},
		deletingToken: (state, actions) => {
			state.token = "";
		},
		saveEmail: (state, actions) => {
			state.email = actions.payload;
		},
	},
});

export const {saveToken, deletingToken, saveEmail} = userSlice.actions;

export default userSlice.reducer;
