// --MODULE IMPORTS.
import React, {useEffect, useState, memo} from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Modal,
	StatusBar,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {getPhotos} from "../../../../Helpers/getPhotos";
import ImageItem from "./ImageItem";
import color from "../../../colors";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {
	clearPhotos,
	clearSavedId,
	getSelectedImages,
	readFromLibrary,
} from "../../../Store/home-store/imageSlice";
import {formatDataForGrid} from "../../../../Helpers/formatDataForGrid";
import {hideGallery, showPrice} from "../../../Store/home-store/modalSlice";
import {Body, ButtonText} from "../../../Typography";
import Price from "../Price";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

function Gallery(props) {
	// --token using use selector hook.
	// const [authToken, set_authToken] = useState("");
	const authToken = useSelector((state) => {
		return state.user.token;
	});

	// --initiating dispatch.
	const dispatch = useDispatch();

	// --text to show that you need to select only five images.
	const warnTextVisible = useSelector((state) => {
		return state.readImage.warnTextVisible;
	});

	// -- photo data that will be used on flatlist.
	const photos = useSelector((state) => {
		return state.readImage.photos;
	});

	// --saved ids.
	const savedIds = useSelector((state) => {
		return state.readImage.savedIds;
	});

	// --function that will make the next button visible or not.
	const nextButtonVisible = useSelector((state) => {
		return state.readImage.nextButtonVisible;
	});

	// --boolean value that will make the next modal for showing
	// --text input for entering price.
	const visible = useSelector((state) => {
		return state.showModal.priceVisible;
	});

	// --formating the photos data so as it can be viewed in
	// --coloms form.
	const numColumns = 2;
	useEffect(() => {
		// --helper function that will enable us to get photos
		// --from phone media library.
		getPhotos()
			.then((res) => {
				// --helper function that will add number of column to required ones.
				res = formatDataForGrid(res, numColumns);
				dispatch(readFromLibrary(res));
			})
			.catch((err) => console.log(err));
	}, []);

	// --button that will handle when a user press back button.
	const handleBack = () => {
		dispatch(clearSavedId());
		dispatch(clearPhotos());
		dispatch(hideGallery());
	};

	// --button that will trigger visible value to true.
	const handleNext = () => {
		dispatch(showPrice());
	};

	// --render item for FLATLIST.
	const renderItem = ({item}) => {
		return <ImageItem source={item.uri} id={item.id} />;
	};

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor={color.primary} />

			{/* --top container. */}
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBack}
					style={styles.backArrow}
				/>

				{/* --showing warn text or not using logical AND operators. */}
				{warnTextVisible && (
					<Body style={styles.textSelectWarning}>select at least 5 images</Body>
				)}

				{/* --button for showing next, going to next step. */}
				{nextButtonVisible && (
					<TouchableOpacity activeOpacity={0.9} onPress={handleNext}>
						<ButtonText style={styles.nextText}>Next</ButtonText>
					</TouchableOpacity>
				)}
			</View>

			{/* --flatlist for maping out the data and making them scrollable. */}
			<FlatList
				data={photos}
				renderItem={renderItem}
				initialNumToRender={8}
				numColumns={numColumns}
			/>

			{/* --Modal for showing next step which is entering price. */}
			<Modal visible={visible} transparent={false} animationType='fade'>
				<Price />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	topContainer: {
		paddingVertical: 8,
		paddingHorizontal: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: color.primary,
		marginBottom: 2,
	},
	backArrow: {
		color: "white",
		backgroundColor: color.primary,
		padding: 4,
		borderRadius: 25,
	},
	textSelectWarning: {
		color: "black",
		marginRight: 70,
		textTransform: "lowercase",
	},
	nextButtonContainer: {
		backgroundColor: "white",
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginRight: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "black",
		fontWeight: "bold",
	},
	nextText: {
		backgroundColor: "white",
		paddingVertical: 10,
		paddingHorizontal: 10,
		color: "black",
		fontWeight: "700",
		borderRadius: 3,
		marginRight: 10,
	},
});

export default memo(Gallery);
