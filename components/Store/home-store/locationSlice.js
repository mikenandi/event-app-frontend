import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	initialRegion: {
		ip: "197.250.100.176",
		country_code: "TZ",
		country_name: "Tanzania",
		region_code: "02",
		region_name: "Dar es Salaam Region",
		city: "Dar es Salaam",
		zip_code: "",
		time_zone: "Africa/Dar_es_Salaam",
		latitude: -6.7963,
		longitude: 39.2847,
		metro_code: 0,
	},
};

export const locationSlice = createSlice({
	name: "actions for entering address",
	initialState,
	reducers: {
		getRegionFromIp: (state, actions) => {
			state.initialRegion = actions.payload;
		},
	},
});

export const {getRegionFromIp} = locationSlice.actions;

export default locationSlice.reducer;
