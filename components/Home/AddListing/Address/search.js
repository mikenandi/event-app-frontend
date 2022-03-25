import React, {memo} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {HeadingS} from "../../../Typography";
import color from "../../../colors";
import {FontAwesome} from "@expo/vector-icons";

function Search(props) {
	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchInput}>
				<FontAwesome
					name='search'
					size={20}
					color='grey'
					style={styles.searchIcon}
				/>
				<HeadingS>Search</HeadingS>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	searchContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		backgroundColor: "white",
		marginTop: 10,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	searchInput: {
		backgroundColor: color.lightgray,
		flexDirection: "row",
		margin: 15,
		paddingHorizontal: 5,
		paddingVertical: 10,
		borderRadius: 5,
	},
	searchIcon: {
		marginRight: 10,
		marginLeft: 5,
	},
	bar: {
		width: 60,
		height: 5,
		backgroundColor: "yellow",
	},
});

export default memo(Search);
