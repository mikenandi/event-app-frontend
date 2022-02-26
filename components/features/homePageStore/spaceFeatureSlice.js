import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	roomCount: "1",
	masterBedroom: false,
	showYesMasterBedroom: false,
	showNoMasterBedroom: false,
};

export const spaceFeatureSlice = createSlice({
	name: "space feautes actions",
	initialState,
	reducers: {
		changedText: (state, action) => {
			state.roomCount = action.payload;
		},
		addRoom: (state) => {
			let value = Number(state.roomCount) + 1;
			state.roomCount = value.toString();
		},
		minusRoom: (state) => {
			let value = Number(state.roomCount) - 1;
			if (value < 1) {
				state.roomCount;
			} else {
				state.roomCount = value.toString();
			}
		},
		yesMasterBedroom: (state) => {
			if (state.masterBedroom) {
				state.masterBedroom = false;
				state.showYesMasterBedroom = false;
			} else {
				state.masterBedroom = true;
				state.showYesMasterBedroom = true;
			}
		},
		noMasterBedroom: (state) => {
			if (state.masterBedroom) {
				state.masterBedroom = false;
				state.showNoMasterBedroom = true;
			} else {
				state.masterBedroom = false;
				state.showNoMasterBedroom = false;
			}
		},
	},
});

export const {
	changedText,
	addRoom,
	minusRoom,
	yesMasterBedroom,
	noMasterBedroom,
} = spaceFeatureSlice.actions;

export default spaceFeatureSlice.reducer;
