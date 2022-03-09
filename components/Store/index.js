import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./homePageStore/modalSlice";
import imageReducer from "./homePageStore/imageSlice";
import spaceFeaturesReducer from "./homePageStore/spaceFeatureSlice";
import locationReducer from "./homePageStore/locationSlice";
import amenityReducer from "./homePageStore/amenitySlice";
import propertyTypesReducer from "./homePageStore/propertyTypesSlice";

export const store = configureStore({
	reducer: {
		readImage: imageReducer,
		showModal: modalReducer,
		spaceFeature: spaceFeaturesReducer,
		location: locationReducer,
		amenity: amenityReducer,
		propertyType: propertyTypesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
