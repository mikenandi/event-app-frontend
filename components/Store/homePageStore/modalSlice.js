import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	addListingVisible: false,
	searchVisible: false,
	propertyTypeVisible: false,
	secondStepVisible: false,
	requestVisible: false,
	thirdStepVisible: false,
	roomSecondStepVisible: false,
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
			state.secondStepVisible = true;
		},
		hideFeatures: (state) => {
			state.secondStepVisible = false;
		},
		showRequest: (state) => {
			state.requestVisible = true;
		},
		hideRequest: (state) => {
			state.requestVisible = false;
		},
		showThirdStep: (state) => {
			state.thirdStepVisible = true;
		},
		hideThirdStep: (state) => {
			state.thirdStepVisible = false;
		},
		showRoomSecondStep: (state) => {
			state.roomSecondStepVisible = true;
		},
		hideRoomSecondStep: (state) => {
			state.roomSecondStepVisible = false;
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
	showThirdStep,
	hideThirdStep,
	showRoomSecondStep,
	hideRoomSecondStep,
} = homePageSlice.actions;

export default homePageSlice.reducer;
