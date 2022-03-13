import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	previewVisible: false,
	nextButtonVisible: false,
	warnTextVisible: true,
	photos: [],
	savedIds: [],
	selectedImages: [],
};

export const imageSlice = createSlice({
	name: "image related actions",
	initialState,
	reducers: {
		readFromLibrary: (state, action) => {
			state.photos = action.payload;
		},
		saveSelectedIds: (state, action) => {
			state.savedIds.push(action.payload);
			state.selected = true;
			if (state.savedIds.length >= 5) {
				state.nextButtonVisible = true;
				state.warnTextVisible = false;
			}
		},
		removeSelectedId: (state, action) => {
			state.savedIds = state.savedIds.filter((item) => item !== action.payload);
			state.selected = false;
			if (state.savedIds.length < 5) {
				state.nextButtonVisible = false;
				state.warnTextVisible = true;
			}
		},
		clearPhotos: (state) => {
			Object.assign(state, initialState);
		},
		setPreviewVisible: (state) => {
			if (state.previewVisible) {
				state.previewVisible = false;
				state.selectedImages = [];
			} else {
				state.previewVisible = true;
			}
		},
		getSelectedImages: (state) => {
			state.savedIds.forEach((item) => {
				const saved = state.photos.filter((photo) => photo.id === item);
				state.selectedImages.push(saved[0]);
			});
		},
		clearSelectedImages: (state) => {
			state.selectedImages = [];
		},
	},
});

export const {
	readFromLibrary,
	saveSelectedIds,
	removeSelectedId,
	clearPhotos,
	setPreviewVisible,
	getSelectedImages,
	clearSelectedImages,
} = imageSlice.actions;

export default imageSlice.reducer;
