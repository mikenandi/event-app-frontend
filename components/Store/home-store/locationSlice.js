import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	coordinates: {
		latitude: -6.7963,
		longitude: 39.2847,
	},
	location_data: {
		city: "",
		city_district: "",
		country: "",
		country_code: "",
		house_number: "",
		postcode: "",
		region: "",
		road: "",
		suburb: "",
		ward: "",
		popular_name: "",
	},
};

export const locationSlice = createSlice({
	name: "actions for entering address",
	initialState,
	reducers: {
		getRegionFromIp: (state, actions) => {
			state.coordinates.latitude = actions.payload.latitude;
			state.coordinates.longitude = actions.payload.longitude;
		},
		getPhoneGpsLocation: (state, actions) => {
			state.coordinates.latitude = actions.payload.coords.latitude;
			state.coordinates.longitude = actions.payload.coords.longitude;
		},
		movePin: (state, actions) => {
			state.coordinates.latitude = actions.payload.latitude;
			state.coordinates.longitude = actions.payload.longitude;
		},
		saveLocationData: (state, actions) => {
			state.location_data.city = actions.payload.city;
			state.location_data.city_district = actions.payload.city_district;
			state.location_data.country = actions.payload.country;
			state.location_data.country_code = actions.payload.country_code;
			state.location_data.house_number = actions.payload.house_number;
			state.location_data.postcode = actions.payload.postcode;
			state.location_data.region = actions.payload.region;
			state.location_data.road = actions.payload.road;
			state.location_data.suburb = actions.payload.suburb;
			state.location_data.ward = actions.payload.ward;
		},
		clearLocationData: (state) => {
			Object.assign(state.location_data, initialState.location_data);
		},
		clearPopularLocation: (state) => {
			state.location_data.popular_name = "";
		},
		savePopularLocation: (state, actions) => {
			state.location_data.popular_name = actions.payload;
		},
	},
});

export const {
	getRegionFromIp,
	getPhoneGpsLocation,
	movePin,
	saveLocationData,
	clearLocationData,
	clearPopularLocation,
	savePopularLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
