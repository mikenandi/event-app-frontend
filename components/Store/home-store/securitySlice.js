import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	fence: false,
	watchman: false,
	fireAlarm: false,
	cctvCamera: false,
};

const securitySlice = createSlice({
	name: "actions for security features",
	initialState,
	reducers: {
		showHideFence: (state) => {
			if (state.fence) state.fence = false;
			else state.fence = true;
		},
		showHideGate: (state) => {
			if (state.gate) state.gate = false;
			else state.gate = true;
		},
		showHideWatchMan: (state) => {
			if (state.watchman) state.watchman = false;
			else state.watchman = true;
		},
		showHideFireAlarm: (state) => {
			if (state.fireAlarm) state.fireAlarm = false;
			else state.fireAlarm = true;
		},
		showHideCctvCamera: (state) => {
			if (state.cctvCamera) state.cctvCamera = false;
			else state.cctvCamera = true;
		},
		clearSecurity: (state) => {
			Object.assign(state, initialState);
		},
	},
});

export const {
	showHideCctvCamera,
	showHideFence,
	showHideFireAlarm,
	showHideGate,
	showHideWatchMan,
	clearSecurity,
} = securitySlice.actions;

export default securitySlice.reducer;
