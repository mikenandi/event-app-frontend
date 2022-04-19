import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	chatVisible: false,
};

const modalSlice = createSlice({
	name: "modal state for message section",
	initialState,
	reducers: {
		showChat: (state) => {
			state.chatVisible = true;
		},
		hideChat: (state) => {
			state.chatVisible = false;
		},
	},
});

export const {showChat, hideChat} = modalSlice.actions;

export default modalSlice.reducer;
