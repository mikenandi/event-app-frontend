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
import {showChat} from "../../../Store/message-store/modalSlice";
import {Caption, BodyS, Body, HeadingL, HeadingS} from "../../Typography";
import {saveVendor} from "../../../Store/message-store/VendorSlice";

function Message(props) {
	const dispatch = useDispatch();

	const handleChat = () => {
		let room_name = "vendor_room";

		props.socket.emit("join_room", room_name);

		dispatch(saveVendor(props.id));
		dispatch(showChat());
	};

	return (
		<TouchableOpacity activeOpacity={0.7} onPress={handleChat}>
			<View style={styles.messagecontainer}>
				{true ? (
					<View style={styles.avatar} />
				) : (
					<Image
						source={require("../../../assets/tenant.jpeg")}
						style={styles.avatar}
					/>
				)}

				<View>
					<View style={styles.rowContainer}>
						<Body style={props.read ? styles.activeNameText : styles.nameText}>
							{props.name}
						</Body>
						<View style={styles.readStatusContainer}>
							{false && (
								<Caption
									style={false ? styles.unreadTimeText : styles.timeText}>
									Wed
								</Caption>
							)}

							{false && <View style={styles.newMsgdot}></View>}
						</View>
					</View>

					<View style={styles.rowContainer}>
						<BodyS
							style={props.read ? styles.briefActive : styles.briefInactive}>
							talk to this vendor
							{/* {props.msg.length > 70
								? props.msg.slice(0, 35).concat("...")
								: props.msg} */}
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
		borderRadius: 25,
		marginRight: 10,
		backgroundColor: color.primary,
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
