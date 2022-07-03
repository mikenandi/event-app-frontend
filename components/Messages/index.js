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

function Messages(props) {
	const visible = useSelector((state) => {
		return state.showModalMessage.chatVisible;
	});

	const renderItem = ({item}) => {
		return <Message name={item.tenantName} read={item.read} msg={item.msg} />;
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={Data}
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
				<Chat />
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
