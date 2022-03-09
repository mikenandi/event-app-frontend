import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	propertyType: "",
};

const propertyTypesSlice = createSlice({
	name: "store for data property type",
	initialState,
	reducers: {},
});

export const {} = propertyTypesSlice.actions;

export default propertyTypesSlice.reducer;
