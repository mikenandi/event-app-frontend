import React, {memo, useState} from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	StatusBar,
	TextInput,
	FlatList,
} from "react-native";
import {Caption, BodyS, HeadingL, HeadingS, Body} from "../../Typography";
import color from "../../colors";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Feather} from "@expo/vector-icons";
import {hideChat} from "../../../Store/message-store/modalSlice";
import {useDispatch} from "react-redux";
import {backgroundColor} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import {useSelector} from "react-redux";

function Chat(props) {
	const dispatch = useDispatch();
	const [message, setMessage] = React.useState("");
	const [msgList, setMsgList] = React.useState([]);

	const handleBack = () => {
		dispatch(hideChat());
	};

	const userId = useSelector((state) => {
		return state.auth.userId;
	});

	const handleSendMessage = async () => {
		let data = {
			id: Date.now().toString(),
			message: message,
			author: userId,
			room: "vendor_room",
		};
		await props.socket.emit("send_message", data);

		setMsgList((list) => [...list, data]);
		setMessage("");
		return;
	};

	React.useEffect(() => {
		props.socket.on("receive_message", (data) => {
			setMsgList((list) => [...list, data]);
		});

		return () => {
			setMsgList([]);
		};
	}, [props.socket]);

	const renderItem = ({item}) => {
		return (
			<View
				style={
					item.author === userId
						? styles.incomingContainer
						: styles.outGoingContainer
				}>
				<View style={styles.incomingMessageContainer}>
					<Body>{item.message}</Body>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor={color.lightgray} />
			<View style={styles.topBar}>
				<View style={styles.rowContainer}>
					<Ionicons
						name='ios-arrow-back-sharp'
						size={28}
						color={color.dimblack}
						onPress={handleBack}
					/>
					<Image
						source={require("../../../assets/tenant.jpeg")}
						style={styles.avatar}
					/>
					<HeadingS style={styles.nameText}>Michael Nandi</HeadingS>
				</View>

				<MaterialCommunityIcons name='dots-vertical' size={24} color='black' />
			</View>

			<FlatList
				data={msgList}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
			/>
			{false && (
				<View style={styles.incomingContainer}>
					<View style={styles.incomingMessageContainer}>
						<Body>incomming message</Body>
					</View>
				</View>
			)}

			{false && (
				<View style={styles.outGoingContainer}>
					<View style={styles.outGoingMessageContainer}>
						<Body style={styles.outgoingText}>out going message</Body>
					</View>
				</View>
			)}

			<View style={styles.messageContainer}>
				<TextInput
					placeholder='message'
					style={styles.messageInput}
					multiline={true}
					value={message}
					onChangeText={(value) => {
						setMessage(value);
					}}
				/>
				<TouchableOpacity
					onPress={handleSendMessage}
					activeOpacity={0.8}
					style={styles.sendContainer}>
					<Ionicons
						name='send-sharp'
						size={20}
						color={color.primary}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	topBar: {
		flexDirection: "row",
		backgroundColor: color.lightgray,
		justifyContent: "space-between",
		paddingHorizontal: 10,
		paddingVertical: 10,
		alignItems: "center",
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginHorizontal: 6,
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	nameText: {
		color: "black",
	},
	messageContainer: {
		flexDirection: "row",
		alignItems: "center",
		bottom: 0,
		position: "absolute",
		padding: 10,
		width: "100%",
		backgroundColor: "white",
	},
	messageInput: {
		backgroundColor: color.lightgray,
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: "80%",
		borderRadius: 25,
		marginRight: 10,
		fontSize: 16,
		letterSpacing: 0.5,
	},
	sendContainer: {
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color.primary,
	},
	icon: {
		marginLeft: 5,
		color: "white",
	},
	incomingMessageContainer: {
		backgroundColor: color.lightgray,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		borderTopRightRadius: 30,
		marginTop: 10,
		marginLeft: 10,
		maxWidth: "70%",
		padding: 15,
		alignSelf: "flex-start",
	},
	incomingContainer: {
		justifyContent: "flex-start",
	},
	outGoingContainer: {
		flexDirection: "row-reverse",
		paddingBottom: 5,
	},
	outGoingMessageContainer: {
		backgroundColor: color.primary,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		borderTopLeftRadius: 30,
		marginTop: 10,
		marginRight: 10,
		maxWidth: "70%",
		padding: 15,
		alignSelf: "flex-start",
	},
	outgoingText: {color: "white", fontWeight: "normal"},
});

export default memo(Chat);
