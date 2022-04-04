import {createSlice} from "@reduxjs/toolkit";
import {remove_comma} from "../../../Helpers/remove_comma";
import {add_comma} from "../../../Helpers/addCommaToNumber";

const initialState = {
	roomType: "",
	price: "",
};

const room = createSlice({
	name: "store for data property type",
	initialState,
	reducers: {
		masterRoom: (state) => {
			state.roomType = "master room";
		},
		selfContained: (state) => {
			state.roomType = "self Contained";
		},
		normalRoom: (state) => {
			state.roomType = "normal room";
		},
		clearRoomType: (state) => {
			state.roomType = "";
		},
		savePrice: (state, actions) => {
			const comma_removed = remove_comma(actions.payload);
			const price_with_comma = add_comma(comma_removed);
			state.price = price_with_comma;
		},
		clearPrice: (state) => {
			state.price = "";
		},
	},
});

export const {
	typeApartment,
	typeHouse,
	typeRoom,
	masterRoom,
	selfContained,
	normalRoom,
	clearRoomType,
	savePrice,
	clearPrice,
} = room.actions;

export default room.reducer;
