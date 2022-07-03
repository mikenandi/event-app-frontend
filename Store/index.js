import {configureStore} from "@reduxjs/toolkit";
import modalMessageReducer from "./message-store/modalSlice";
import modalSliceReducer from "./homeStore/modalSlice";
import vendorModalReducer from "./VendorStore/modalSlice";

export const store = configureStore({
	reducer: {
		showModalVendor: vendorModalReducer,
		showModalMessage: modalMessageReducer,
		showModal: modalSliceReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
