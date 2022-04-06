import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	propertyTypeVisible: false,
	secondStepVisible: false,
	thirdStepVisible: false,
	roomSecondStepVisible: false,
	amenityVisible: false,
	flooringVisible: false,
	securityVisible: false,
	mapVisible: false,
	locationOptionVisible: false,
	addressDataVisible: false,
	popularNameVisible: false,
	galleryVisible: false,
	priceVisible: false,
	reviewVisible: false,
};

export const modalSlice = createSlice({
	name: "modal actions for posting property",
	initialState,
	reducers: {
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
		showLocationOption: (state) => {
			state.locationOptionVisible = true;
		},
		hideLocationOption: (state) => {
			state.locationOptionVisible = false;
		},
		showAddressData: (state) => {
			state.addressDataVisible = true;
		},
		hideAddressData: (state) => {
			state.addressDataVisible = false;
		},
		showPopularName: (state) => {
			state.popularNameVisible = true;
		},
		hidePopularName: (state) => {
			state.popularNameVisible = false;
		},
		showGallery: (state) => {
			state.galleryVisible = true;
		},
		hideGallery: (state) => {
			state.galleryVisible = false;
		},
		showPrice: (state) => {
			state.priceVisible = true;
		},
		hidePrice: (state) => {
			state.priceVisible = false;
		},
		showReview: (state) => {
			state.reviewVisible = true;
		},
		hideReview: (state) => {
			state.reviewVisible = false;
		},
		hideAll: (state) => {
			Object.assign(state, initialState);
		},
	},
});

export const {
	showPropertyType,
	hidePropertyType,
	showFeatures,
	hideFeatures,
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
	showLocationOption,
	hideLocationOption,
	showAddressData,
	hideAddressData,
	showPopularName,
	hidePopularName,
	showGallery,
	hideGallery,
	showPrice,
	hidePrice,
	showReview,
	hideReview,
	hideAll,
} = modalSlice.actions;

export default modalSlice.reducer;
