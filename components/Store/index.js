import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./home-store/modalSlice";
import imageReducer from "./home-store/imageSlice";
import houseReducer from "./home-store/houseSlice";
import locationReducer from "./home-store/locationSlice";
import amenityReducer from "./home-store/amenitySlice";
import roomReducer from "./home-store/roomSlice";
import floorReducer from "./home-store/floorSlice";
import securityReducer from "./home-store/securitySlice";
import propertyReducer from "./home-store/propertyTypeSlice";
import modalHomeReducer from "./home-store/modalSlice-home";
import modalMessageReducer from "./message-store/modalSlice";
import userReducer from "./auth-store/userSlice";

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
		propertyType: propertyReducer,
		showModalHome: modalHomeReducer,
		showModalMessage: modalMessageReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
