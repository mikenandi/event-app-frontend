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
import Chat from "../Chat";

function Message(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModalMessage.chatVisible;
	});

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
						<Body style={styles.nameText}>{props.name}</Body>
						<Caption style={styles.timeText}>Yesterday</Caption>
					</View>

					<View style={styles.rowContainer}>
						<BodyS
							style={props.read ? styles.briefActive : styles.briefInactive}>
							{props.msg}
						</BodyS>
						{props.read && (
							<View style={styles.newMsgContainer}>
								<BodyS style={styles.newMsgText}>12</BodyS>
							</View>
						)}
					</View>
				</View>
				<Modal animationType='fade' visible={visible} transparent={false}>
					<Chat />
				</Modal>
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
	},
	briefActive: {
		color: color.primary,
		fontWeight: "bold",
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
		marginBottom: 1,
	},
	newMsgContainer: {
		backgroundColor: color.primary,
		width: 23,
		height: 23,
		borderRadius: 11.5,
		justifyContent: "center",
		alignItems: "center",
		padding: 2,
	},
});

export default memo(Message);
