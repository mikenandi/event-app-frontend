import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	bedroom: "1",
	bathroom: "1",
	spaces: {
		masterBedroom: false,
		dinningArea: false,
		kitchenSpace: false,
		livingRoom: false,
	},
};

export const spaceFeatureSlice = createSlice({
	name: "space feautes actions",
	initialState,
	reducers: {
		addBedRoom: (state) => {
			let value = Number(state.bedroom) + 1;
			state.bedroom = value.toString();
		},
		minusBedRoom: (state) => {
			let value = Number(state.bedroom) - 1;
			if (value < 1) state.bedroom;
			else state.bedroom = value.toString();
		},
		addBathRoom: (state) => {
			let value = Number(state.bathroom) + 1;
			state.bathroom = value.toString();
		},
		minusBathRoom: (state) => {
			let value = Number(state.bathroom) - 1;
			if (value < 1) state.bathroom;
			else state.bathroom = value.toString();
		},
		masterBedroomStatus: (state) => {
			if (state.spaces.masterBedroom) state.spaces.masterBedroom = false;
			else state.spaces.masterBedroom = true;
		},
		dinningAreaStatus: (state) => {
			if (state.spaces.dinningArea) state.spaces.dinningArea = false;
			else state.spaces.dinningArea = true;
		},
		kitchenSpaceStatus: (state) => {
			if (state.spaces.kitchenSpace) state.spaces.kitchenSpace = false;
			else state.spaces.kitchenSpace = true;
		},
		livingRoomStatus: (state) => {
			if (state.spaces.livingRoom) state.spaces.livingRoom = false;
			else state.spaces.livingRoom = true;
		},
		clearSpace: (state) => {
			Object.assign(state.spaces, initialState.spaces);
		},
	},
});

export const {
	changedText,
	addBedRoom,
	minusBedRoom,
	addBathRoom,
	minusBathRoom,
	masterBedroomStatus,
	dinningAreaStatus,
	kitchenSpaceStatus,
	livingRoomStatus,
	clearSpace,
} = spaceFeatureSlice.actions;

export default spaceFeatureSlice.reducer;
