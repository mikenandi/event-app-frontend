import {Image, View, StyleSheet, TouchableOpacity} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons";
import {Octicons} from "@expo/vector-icons";
import React, {memo, useState} from "react";
import color from "../../../colors";
import {useDispatch, useSelector} from "react-redux";
import {
	saveSelectedIds,
	removeSelectedId,
} from "../../../Store/home-store/imageSlice";

function ImageItem(props) {
	const [selected, setSelected] = useState(false);

	const dispatch = useDispatch();

	const handleSaveId = () => {
		if (!selected) {
			dispatch(saveSelectedIds(props.id));
			setSelected(true);
		} else {
			dispatch(removeSelectedId(props.id));
			setSelected(false);
		}
	};

	const handleRemoveId = () => {
		if (selected) {
			dispatch(removeSelectedId(props.id));
			setSelected(false);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={handleSaveId}
				style={styles.container}>
				<Image
					source={{uri: props.source}}
					style={styles.uploadedImage}
					blurRadius={1}
				/>
			</TouchableOpacity>

			{selected && (
				<View style={styles.tickContainer}>
					<Octicons
						name='check'
						size={18}
						color='black'
						style={styles.tickIcon}
						onPress={handleRemoveId}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1, height: 160},
	uploadedImage: {
		flex: 1,
		margin: 1,
	},
	tickIcon: {
		opacity: 0.5,
	},
	tickContainer: {
		position: "relative",
		bottom: 120,
		left: 20,
		borderRadius: 30,
		width: 25,
		height: 25,
		backgroundColor: color.primary2,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default memo(ImageItem);
