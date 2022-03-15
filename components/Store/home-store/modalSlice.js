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
	flooringVisible: false,
	securityVisible: false,
	mapVisible: false,
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
		showFlooring: (state) => {
			state.flooringVisible = true;
		},
		hideFlooring: (state) => {
			state.flooringVisible = false;
		},
		showSecurity: (state) => {
			state.securityVisible = true;
		},
		hideSecurity: (state) => {
			state.securityVisible = false;
		},
		showMap: (state) => {
			state.mapVisible = true;
		},
		hideMap: (state) => {
			state.mapVisible = false;
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
	showFlooring,
	hideFlooring,
	showSecurity,
	hideSecurity,
	showMap,
	hideMap,
} = modalSlice.actions;

export default modalSlice.reducer;
