import {View, Text, FlatList, StyleSheet, Image} from "react-native";
import {memo} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {
	clearSelectedImages,
	getSelectedImages,
	setPreviewVisible,
} from "../Store/imageLibrary/imageSlice";
import {Ionicons} from "@expo/vector-icons";
import color from "../../../colors";
import {useEffect} from "react";
import PreveiwImageItem from "./PreveiwImageItem";

function PreviewImage(props) {
	const selectedImages = useSelector((state) => {
		return state.readImage.selectedImages;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSelectedImages());
		return () => {
			dispatch(clearSelectedImages());
		};
	}, []);

	const handleBackToSelection = () => {
		dispatch(setPreviewVisible());
	};

	const renderItem = ({item}) => <PreveiwImageItem source={item.uri} />;

	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Ionicons
					name='arrow-back-outline'
					size={28}
					onPress={handleBackToSelection}
					style={styles.backArrow}
				/>
			</View>
			<View style={styles.spacingBtn} />
			<FlatList
				data={selectedImages}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				horizontal={true}
			/>
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
	spacingBtn: {
		width: "100%",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default memo(PreviewImage);
