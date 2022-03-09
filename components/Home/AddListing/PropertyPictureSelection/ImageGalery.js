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
import ImageItem from "../ImageItem";
import color from "../../../colors";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {
	clearPhotos,
	readFromLibrary,
	setPreviewVisible,
} from "../Store/imageLibrary/imageSlice";
import PreviewImages from "./PreviewImages";
import {formatDataForGrid} from "../../../../Helpers/formatDataForGrid";

function ImageGalery(props) {
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

	const previewVisible = useSelector((state) => {
		return state.readImage.previewVisible;
	});

	const dispatch = useDispatch();

	const handlePreviewImages = () => {
		dispatch(setPreviewVisible());
	};

	const numColumns = 2;
	useEffect(() => {
		getPhotos()
			.then((res) => {
				res = formatDataForGrid(res, numColumns);
				dispatch(readFromLibrary(res));
			})
			.catch((err) => console.log(err));
	}, []);

	const handleBackHomeScreen = () => {
		dispatch(clearPhotos());
		props.setAddListingVisible(!props.addListingVisible);
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
					onPress={handleBackHomeScreen}
					style={styles.backArrow}
				/>
				{warnTextVisible && (
					<Text style={styles.textSelectWarning}>select at least 5 images</Text>
				)}
				{nextButtonVisible && (
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.nextButtonContainer}
						onPress={handlePreviewImages}>
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
			<Modal visible={previewVisible}>
				<PreviewImages />
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	topContainer: {
		marginHorizontal: 8,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	backArrow: {
		color: color.dimblack,
	},
	textSelectWarning: {
		fontFamily: "serif",
		fontSize: 18,
		color: color.dimblack,
		marginRight: 70,
	},
	nextButtonContainer: {
		backgroundColor: color.primary,
		paddingHorizontal: 15,
		paddingVertical: 8,
		marginRight: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "normal",
	},
});

export default memo(ImageGalery);
