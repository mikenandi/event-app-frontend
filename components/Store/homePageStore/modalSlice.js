import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	addListingVisible: false,
	searchVisible: false,
	propertyTypeVisible: false,
	secondStepVisible: false,
	requestVisible: false,
	thirdStepVisible: false,
	roomSecondStepVisible: false,
	amenityVisible: false,
};

export const modalSlice = createSlice({
	name: "modal actions",
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
		showAmenity: (state) => {
			state.amenityVisible = true;
		},
		hideAmenity: (state) => {
			state.amenityVisible = false;
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
	showAmenity,
	hideAmenity,
} = modalSlice.actions;

export default modalSlice.reducer;
