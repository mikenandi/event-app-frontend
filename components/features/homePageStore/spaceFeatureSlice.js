import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	bedRoomCount: "1",
	bathRoomCount: "1",
	masterBedroom: false,
	dinningArea: false,
	kitchenSpace: false,
};

export const spaceFeatureSlice = createSlice({
	name: "space feautes actions",
	initialState,
	reducers: {
		addBedRoom: (state) => {
			let value = Number(state.bedRoomCount) + 1;
			state.bedRoomCount = value.toString();
		},
		minusBedRoom: (state) => {
			let value = Number(state.bedRoomCount) - 1;
			if (value < 1) state.bedRoomCount;
			else state.bedRoomCount = value.toString();
		},
		addBathRoom: (state) => {
			let value = Number(state.bathRoomCount) + 1;
			state.bathRoomCount = value.toString();
		},
		minusBathRoom: (state) => {
			let value = Number(state.bathRoomCount) - 1;
			if (value < 1) state.bathRoomCount;
			else state.bathRoomCount = value.toString();
		},
		masterBedroomStatus: (state) => {
			if (state.masterBedroom) state.masterBedroom = false;
			else state.masterBedroom = true;
		},
		dinningAreaStatus: (state) => {
			if (state.dinningArea) state.dinningArea = false;
			else state.dinningArea = true;
		},
		kitchenSpaceStatus: (state) => {
			if (state.kitchenSpace) state.kitchenSpace = false;
			else state.kitchenSpace = true;
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
} = spaceFeatureSlice.actions;

export default spaceFeatureSlice.reducer;
