import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	propertyType: "",
	flooring: "",
	roomType: "",
};

const room = createSlice({
	name: "store for data property type",
	initialState,
	reducers: {
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
} = room.actions;

export default room.reducer;
