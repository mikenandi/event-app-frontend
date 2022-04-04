import {View, Text, FlatList, StyleSheet, Image} from "react-native";
import {memo} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {
	clearSelectedImages,
	getSelectedImages,
} from "../../../../Store/home-store/imageSlice";
import color from "../../../../colors";
import {useEffect} from "react";
import PreveiwImageItem from "./image-item";
import {Body} from "../../../../Typography";

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

	const renderItem = ({item}) => {
		return <PreveiwImageItem source={item.uri} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={selectedImages}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
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
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default memo(PreviewImage);
