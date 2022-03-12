import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	propertyType: "",
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
} = propertyTypesSlice.actions;

export default propertyTypesSlice.reducer;
