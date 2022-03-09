import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	addListingVisible: false,
	searchVisible: false,
	propertyTypeVisible: false,
	featureVisible: false,
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
	},
});

export const {
	showSearch,
	hideSearch,
	showPropertyType,
	hidePropertyType,
	showFeatures,
	hideFeatures,
} = homePageSlice.actions;

export default homePageSlice.reducer;
