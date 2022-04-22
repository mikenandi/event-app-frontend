import React, {memo} from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Modal,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import color from "../../colors";
import {showChat} from "../../Store/message-store/modalSlice";
import {Caption, BodyS, Body, HeadingL, HeadingS} from "../../Typography";

function Message(props) {
	const dispatch = useDispatch();

	const handleChat = () => {
		dispatch(showChat());
	};

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={handleChat}>
			<View style={styles.messagecontainer}>
				<Image
					source={require("../../../assets/tenant.jpeg")}
					style={styles.avatar}
				/>
				<View>
					<View style={styles.rowContainer}>
						<Body style={props.read ? styles.activeNameText : styles.nameText}>
							{props.name}
						</Body>
						<View style={styles.readStatusContainer}>
							<Caption
								style={props.read ? styles.unreadTimeText : styles.timeText}>
								Wed
							</Caption>
							{props.read && <View style={styles.newMsgdot}></View>}
						</View>
					</View>

					<View style={styles.rowContainer}>
						<BodyS
							style={props.read ? styles.briefActive : styles.briefInactive}>
							{props.msg.length > 70
								? props.msg.slice(0, 35).concat("...")
								: props.msg}
						</BodyS>
					</View>
				</View>
			</View>
		</TouchableOpacity>
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
		marginVertical: 5,
	},
	nameText: {
		marginBottom: 2,
		textTransform: "capitalize",
	},
	briefActive: {
		color: "black",
		fontWeight: "bold",
	},
	briefInactive: {color: color.dimblack, fontWeight: "normal"},
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
		marginBottom: 1,
	},
	newMsgdot: {
		backgroundColor: color.primary,
		width: 8,
		height: 8,
		borderRadius: 4,
		marginLeft: 5,
	},
	unreadTimeText: {
		marginBottom: 2,
		color: "black",
		fontWeight: "bold",
	},
	readStatusContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	activeNameText: {
		fontWeight: "bold",
	},
});

export default memo(Message);
