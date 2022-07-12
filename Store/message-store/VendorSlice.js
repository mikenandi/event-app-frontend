import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	vendors: [],
	vendorId: "",
	vendor: {},
};

const vendorsSlice = createSlice({
	name: "modal state for message section",
	initialState,
	reducers: {
		saveVendorsData: (state, actions) => {
			state.vendors = actions.payload;
		},
		saveVendor: (state, actions) => {
			// state.vendorId = actions.payload;

			let filter_data = state.vendors.filter(
				(vendor) => vendor.id === actions.payload,
			);

			state.vendor = filter_data[0];
		},
	},
});

export const {saveVendorsData, saveVendor} = vendorsSlice.actions;

export default vendorsSlice.reducer;
