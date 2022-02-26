import {configureStore} from "@reduxjs/toolkit";
import homePageReducer from "./homePageStore/homePageSlice";
import imageReducer from "./imageLibrary/imageSlice";
import spaceFeaturesReducer from "./homePageStore/spaceFeatureSlice";
import locationReducer from "./homePageStore/locationSlice";

export const store = configureStore({
	reducer: {
		readImage: imageReducer,
		homePage: homePageReducer,
		spaceFeatures: spaceFeaturesReducer,
		location: locationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
