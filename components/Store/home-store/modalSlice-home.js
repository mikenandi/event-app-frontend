import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	searchVisible: false,
	requestVisible: false,
	detailVisible: false,
};

const modalSlice = createSlice({
	name: "home Slice",
	initialState,
	reducers: {
		showSearch: (state) => {
			state.searchVisible = true;
		},
		hideSearch: (state) => {
			state.searchVisible = false;
		},
		showRequest: (state) => {
			state.requestVisible = true;
		},
		hideRequest: (state) => {
			state.requestVisible = false;
		},
		showDetail: (state) => {
			state.detailVisible = true;
		},
		hideDetail: (state) => {
			state.detailVisible = false;
		},
	},
});

export const {
	showSearch,
	hideSearch,
	showRequest,
	hideRequest,
	showDetail,
	hideDetail,
} = modalSlice.actions;

export default modalSlice.reducer;
