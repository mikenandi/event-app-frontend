import React, {memo} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import color from "../../colors";
import {Caption, BodyS, Body, HeadingL, HeadingS} from "../../Typography";

function Message(props) {
	return (
		<View style={styles.messagecontainer}>
			<Image
				source={require("../../../assets/tenant.jpeg")}
				style={styles.avatar}
			/>
			<View>
				<View style={styles.rowContainer}>
					<Body style={styles.nameText}>Michael Nandi</Body>
					<Caption style={styles.timeText}>Yesterday</Caption>
				</View>

				<View style={styles.rowContainer}>
					<BodyS style={props.read ? styles.briefActive : styles.briefInactive}>
						{props.msg}
					</BodyS>
					{props.read && (
						<View style={styles.newMsgContainer}>
							<BodyS style={styles.newMsgText}>12</BodyS>
						</View>
					)}
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	messagecontainer: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 10,
		alignItems: "center",
	},
	nameText: {
		marginBottom: 2,
	},
	briefActive: {
		color: color.primary,
	},
	briefInactive: {color: "gray"},
	timeText: {
		marginBottom: 2,
		color: color.dimblack,
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 240,
	},
	newMsgText: {
		color: "white",
		fontWeight: "bold",
	},
	newMsgContainer: {
		backgroundColor: color.primary,
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		padding: 2,
	},
});

export default memo(Message);
