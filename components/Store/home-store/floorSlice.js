import {createSlice} from "@reduxjs/toolkit";

const initialState = {floorType: ""};

const floorSlice = createSlice({
	name: "actions related to floor",
	initialState,
	reducers: {
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

export const {tilesFloor, normalFloor, woodenFloor, clearFloor} =
	floorSlice.actions;

export default floorSlice.reducer;
