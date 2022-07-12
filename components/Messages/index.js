import React, {memo} from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
	Modal,
} from "react-native";
import color from "../colors";
import {Caption, BodyS, Body, HeadingL, HeadingS} from "../Typography";
import Data from "../msgdata";
import Message from "./Message";
import {useSelector} from "react-redux";
import Chat from "./Chat";
import {EvilIcons, MaterialIcons} from "@expo/vector-icons";
import axios from "axios";
import {io} from "socket.io-client";
import {useDispatch} from "react-redux";
import {saveVendorsData} from "../../Store/message-store/VendorSlice";

const socket = io.connect("http://evento-chatt.herokuapp.com");

function Messages(props) {
	const dispatch = useDispatch();
	const visible = useSelector((state) => {
		return state.showModalMessage.chatVisible;
	});

	const userId = useSelector((state) => {
		return state.auth.userId;
	});

	const vendors = useSelector((state) => {
		return state.vendorMsg.vendors;
	});

	React.useEffect(() => {
		(async function () {
			await socket.emit("find_all_vendors");

			await socket.on("vendors_data", function (data) {
				dispatch(saveVendorsData(data));
				return;
			});
		})();
	}, []);

	const renderItem = ({item}) => {
		return (
			<Message
				name={item.bussiness_name}
				id={item.id}
				msg={item.msg}
				socket={socket}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={vendors}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>

			{/* floatin action button */}
			<TouchableOpacity
				style={styles.floatingActionButton}
				activeOpacity={0.8}
				onPress={() => {}}>
				<MaterialIcons name='chat' size={24} color={color.primary} />
			</TouchableOpacity>

			{/* show a chat */}
			<Modal animationType='fade' visible={visible} transparent={false}>
				<Chat socket={socket} />
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
	},
	floatingActionButton: {
		position: "absolute",
		bottom: 30,
		right: 30,
		flexDirection: "row",
		backgroundColor: color.lightblue,
		padding: 15,
		borderRadius: 10,
	},
});

export default memo(Messages);
