import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	propertyType: "",
	flooring: "",
	roomType: "",
};

const propertyTypesSlice = createSlice({
	name: "store for data property type",
	initialState,
	reducers: {
		typeApartment: (state) => {
			state.propertyType = "apartment";
		},
		typeHouse: (state) => {
			state.propertyType = "house";
		},
		typeRoom: (state) => {
			state.propertyType = "room";
		},
		masterRoom: (state) => {
			state.roomType = "master room";
		},
		selfContained: (state) => {
			state.roomType = "self Contained";
		},
		normalRoom: (state) => {
			state.roomType = "normal room";
		},
		clearRoomType: (state) => {
			state.roomType = "";
		},
		tilesFloor: (state) => {
			state.flooring = "tile floor";
		},
		woodenFloor: (state) => {
			state.flooring = "wooden floor";
		},
		normalFloor: (state) => {
			state.flooring = "normal floor";
		},
		clearFloor: (state) => {
			state.flooring = "";
		},
	},
});

export const {
	typeApartment,
	typeHouse,
	typeRoom,
	masterRoom,
	selfContained,
	normalRoom,
	clearRoomType,
	tilesFloor,
	normalFloor,
	woodenFloor,
	clearFloor,
} = propertyTypesSlice.actions;

export default propertyTypesSlice.reducer;
