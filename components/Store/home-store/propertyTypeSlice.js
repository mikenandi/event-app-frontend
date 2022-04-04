import {createSlice} from "@reduxjs/toolkit";

initialState = {type: ""};

const PropertyType = createSlice({
	name: "slice for recording the property type",
	initialState,
	reducers: {
		typeRoom: (state) => {
			state.type = "room";
		},
		typeHouse: (state) => {
			state.type = "house";
		},
		typeApartment: (state) => {
			state.type = "apartment";
		},
		clearType: (state) => {
			Object.assign(state, initialState);
		},
	},
});

export const {typeApartment, typeHouse, typeRoom, clearType} =
	PropertyType.actions;

export default PropertyType.reducer;
