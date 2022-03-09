import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	addListingVisible: false,
	searchVisible: false,
	propertyTypeVisible: false,
	featureVisible: false,
	requestVisible: false,
};

export const homePageSlice = createSlice({
	name: "Home actions",
	initialState,
	reducers: {
		showSearch: (state) => {
			state.searchVisible = true;
		},
		hideSearch: (state) => {
			state.searchVisible = false;
		},
		showPropertyType: (state) => {
			state.propertyTypeVisible = true;
		},
		hidePropertyType: (state) => {
			state.propertyTypeVisible = false;
		},
		showFeatures: (state) => {
			state.featureVisible = true;
		},
		hideFeatures: (state) => {
			state.featureVisible = false;
		},
		showRequest: (state) => {
			state.requestVisible = true;
		},
		hideRequest: (state) => {
			state.requestVisible = false;
		},
	},
});

export const {
	showSearch,
	hideSearch,
	showPropertyType,
	hidePropertyType,
	showFeatures,
	hideFeatures,
	showRequest,
	hideRequest,
} = homePageSlice.actions;

export default homePageSlice.reducer;
