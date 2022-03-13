import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	water: false,
	electricity: false,
	airConditioner: false,
	parking: false,
	pool: false,
	fan: false,
};

const amenitySlice = createSlice({
	name: "action related to amenity of the property",
	initialState,
	reducers: {
		showHideWater: (state) => {
			if (state.water) state.water = false;
			else state.water = true;
		},
		showHideElectricity: (state) => {
			if (state.electricity) state.electricity = false;
			else state.electricity = true;
		},
		showHideAC: (state) => {
			if (state.airConditioner) state.airConditioner = false;
			else state.airConditioner = true;
		},
		showHideFan: (state) => {
			if (state.fan) state.fan = false;
			else state.fan = true;
		},
		showHidePool: (state) => {
			if (state.pool) state.pool = false;
			else state.pool = true;
		},
		showHideParking: (state) => {
			if (state.parking) state.parking = false;
			else state.parking = true;
		},
		clearAmenities: (state) => {
			Object.assign(state, initialState);
		},
	},
});

export const {
	showHideElectricity,
	showHideFan,
	showHideParking,
	showHidePool,
	showHideWater,
	clearAmenities,
	showHideAC,
} = amenitySlice.actions;

export default amenitySlice.reducer;
