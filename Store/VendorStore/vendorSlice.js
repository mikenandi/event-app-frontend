import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	vendorsData: [],
};

const vendorSlice = createSlice({
	name: "reducers for vendors.",
	initialState,
	reducers: {
		getVendorsData: (state, actions) => {
			state.vendorsData = actions.payload;
		},
	},
});

export const {getVendorsData} = vendorSlice.actions;

export default vendorSlice.reducer;
