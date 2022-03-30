import React, {useEffect, memo} from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Modal,
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
import {Body, Caption} from "../../../Typography";
import Price from "../Price";

function Gallery(props) {
	const dispatch = useDispatch();

	const warnTextVisible = useSelector((state) => {
		return state.readImage.warnTextVisible;
	});

	const photos = useSelector((state) => {
		return state.readImage.photos;
	});

	const savedIds = useSelector((state) => {
		return state.readImage.savedIds;
	});

	const nextButtonVisible = useSelector((state) => {
		return state.readImage.nextButtonVisible;
	});

	const visible = useSelector((state) => {
		return state.showModal.priceVisible;
	});

	const numColumns = 2;
	useEffect(() => {
		getPhotos()
			.then((res) => {
				res = formatDataForGrid(res, numColumns);
				dispatch(readFromLibrary(res));
			})
			.catch((err) => console.log(err));
	}, []);

	const handleBack = () => {
		dispatch(clearSavedId());
		dispatch(clearPhotos());
		dispatch(hideGallery());
	};

	const handleNext = () => {
		dispatch(getSelectedImages());
		dispatch(showPrice());
	};

	const renderItem = ({item}) => {
		return <ImageItem source={item.uri} id={item.id} />;
	};

	return (
		<View style={styles.screen}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBack}
					style={styles.backArrow}
				/>
				{warnTextVisible && (
					<Body style={styles.textSelectWarning}>select at least 5 images</Body>
				)}
				{nextButtonVisible && (
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.nextButtonContainer}
						onPress={handleNext}>
						<Text style={styles.buttonText}>NEXT</Text>
					</TouchableOpacity>
				)}
			</View>

			<FlatList
				data={photos}
				renderItem={renderItem}
				initialNumToRender={8}
				numColumns={numColumns}
			/>
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
		paddingVertical: 10,
		paddingHorizontal: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: color.primary,
	},
	backArrow: {
		color: "white",
	},
	textSelectWarning: {
		color: "black",
		marginRight: 70,
		textTransform: "lowercase",
	},
	nextButtonContainer: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 8,
		marginRight: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "black",
		fontSize: 16,
		fontWeight: "normal",
	},
});

export default memo(Gallery);
