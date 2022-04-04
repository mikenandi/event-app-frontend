import {Image, View, StyleSheet} from "react-native";
import React, {memo} from "react";

function PreviewImageItem(props) {
	return (
		<View>
			<Image source={{uri: props.source}} style={styles.imagePreview} />
		</View>
	);
}

const styles = StyleSheet.create({
	imagePreview: {
		width: 100,
		height: 100,
		margin: 5,
	},
});

export default memo(PreviewImageItem);
