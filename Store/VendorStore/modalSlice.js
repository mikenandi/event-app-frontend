import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	registerVendorVisible: false,
};

const modalSlice = createSlice({
	name: "modals for vendors.",
	initialState,
	reducers: {
		showRegisterVendor: (state, actions) => {
			state.registerVendorVisible = true;
		},
		hideRegisterVendor: (state, actions) => {
			state.registerVendorVisible = false;
		},
	},
});

export const {showRegisterVendor, hideRegisterVendor} = modalSlice.actions;

export default modalSlice.reducer;
