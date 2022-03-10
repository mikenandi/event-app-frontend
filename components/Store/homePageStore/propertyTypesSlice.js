import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	propertyType: "",
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
	},
});

export const {typeApartment, typeHouse, typeRoom} = propertyTypesSlice.actions;

export default propertyTypesSlice.reducer;
