import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./home-store/modalSlice";
import imageReducer from "./home-store/imageSlice";
import houseReducer from "./home-store/houseSlice";
import locationReducer from "./home-store/locationSlice";
import amenityReducer from "./home-store/amenitySlice";
import roomReducer from "./home-store/roomSlice";
import floorReducer from "./home-store/floorSlice";
import securityReducer from "./home-store/securitySlice";

export const store = configureStore({
	reducer: {
		readImage: imageReducer,
		showModal: modalReducer,
		house: houseReducer,
		location: locationReducer,
		amenity: amenityReducer,
		room: roomReducer,
		floor: floorReducer,
		security: securityReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
