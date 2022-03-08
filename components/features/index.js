import {configureStore} from "@reduxjs/toolkit";
import homePageReducer from "./homePageStore/homePageSlice";
import imageReducer from "./imageLibrary/imageSlice";
import spaceFeaturesReducer from "./homePageStore/spaceFeatureSlice";
import locationReducer from "./homePageStore/locationSlice";
import amenityReducer from "./homePageStore/amenitySlice";

export const store = configureStore({
	reducer: {
		readImage: imageReducer,
		homePage: homePageReducer,
		spaceFeatures: spaceFeaturesReducer,
		location: locationReducer,
		amenity: amenityReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
