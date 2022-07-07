import {configureStore} from "@reduxjs/toolkit";
import modalMessageReducer from "./message-store/modalSlice";
import modalSliceReducer from "./homeStore/modalSlice";
import vendorModalReducer from "./VendorStore/modalSlice";
import authReducer from "./Auth/authSlice";
import eventReducer from "./homeStore/eventSlice";
import vendorReducer from "./VendorStore/vendorSlice";

export const store = configureStore({
	reducer: {
		showModalVendor: vendorModalReducer,
		showModalMessage: modalMessageReducer,
		showModal: modalSliceReducer,
		auth: authReducer,
		event: eventReducer,
		vendor: vendorReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
