import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	messageList: [],
};

const convSlice = createSlice({
	name: "storing messages.",
	initialState,
	reducers: {
		receiveMessage: (state, actions) => {
			state.messageList.push(actions.payload);
		},
		saveCurrentData: (state, actions) => {
			state.messageList = state.messageList.push(actions.payload);
		},
	},
});

export const {receiveMessage} = convSlice.actions;

export default convSlice.reducer;
