import {Image, View, StyleSheet, TouchableOpacity} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons";
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
				<SimpleLineIcons
					name='check'
					size={24}
					color={color.primary}
					style={styles.tickIcon}
					onPress={handleRemoveId}
				/>
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
		position: "absolute",
		top: 20,
		left: 20,
		backgroundColor: "white",
		borderRadius: 12,
	},
});

export default memo(ImageItem);
