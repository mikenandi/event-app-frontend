import {configureStore} from "@reduxjs/toolkit";
import modalMessageReducer from "./message-store/modalSlice";

export const store = configureStore({
	reducer: {
		showModalMessage: modalMessageReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
