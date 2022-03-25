import React, {memo} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

import {Caption, BodyS, HeadingL} from "../Typography";

function Messages(props) {
	return (
		<View style={styles.container}>
			<HeadingL>Tenant and landlord Messages</HeadingL>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "flex-start",
	},
	ImageContainer: {
		marginLeft: 15,
		alignItems: "center",
		marginTop: 10,
		flexDirection: "row",
	},
	profileImage: {
		marginLeft: 10,
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileImageText: {
		marginLeft: 12,
		marginTop: 20,
	},
	editButton: {
		display: "flex",
		marginLeft: 90,
		alignItems: "center",
		marginTop: 22,
		width: 180,
		height: 35,
		borderWidth: 0.5,
		borderColor: "grey",
		borderRadius: 20,
	},
	editProfileTxt: {
		fontSize: 18,
		marginTop: 2,
	},
	NormalText: {
		fontSize: 15,
		padding: 2,
	},
	profileInfo: {
		marginTop: 20,
		alignItems: "flex-start",
	},
	userInfo: {
		// borderWidth: 0.5,
		// borderColor: 'gray',
		padding: 5,
		margin: 5,
		display: "flex",
		flexDirection: "row",
	},
	userInfoLabel: {
		margin: 4,
		fontSize: 17,
		color: "grey",
	},
	userInfoText: {
		margin: 4,
		fontSize: 17,
	},
});

export default memo(Messages);
