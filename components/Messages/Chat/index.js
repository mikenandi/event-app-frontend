import React, {memo, useState} from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import {Caption, BodyS, HeadingL, HeadingS, Body} from "../../Typography";
import color from "../../colors";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {hideChat} from "../../Store/message-store/modalSlice";
import {useDispatch} from "react-redux";

function Chat(props) {
	const dispatch = useDispatch();
	const handleBack = () => {
		dispatch(hideChat());
	};
	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor={color.primary} />
			<View style={styles.topBar}>
				<View style={styles.rowContainer}>
					<Ionicons
						name='ios-arrow-back-sharp'
						size={24}
						color={color.lightgray}
						onPress={handleBack}
					/>
					<Image
						source={require("../../../assets/tenant.jpeg")}
						style={styles.avatar}
					/>
					<HeadingS style={styles.nameText}>Michael Nandi</HeadingS>
				</View>

				<MaterialCommunityIcons
					name='dots-vertical'
					size={24}
					color={color.dimblack}
				/>
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
		backgroundColor: color.primary,
		justifyContent: "space-between",
		paddingHorizontal: 10,
		paddingVertical: 5,
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
		color: color.lightgray,
		fontWeight: "bold",
	},
});

export default memo(Chat);
