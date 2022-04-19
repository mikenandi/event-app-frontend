import React, {memo} from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import color from "../colors";
import {Caption, BodyS, Body, HeadingL, HeadingS} from "../Typography";
import Data from "../msgdata";
import Message from "./Message";

function Messages(props) {
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
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
	},
});

export default memo(Messages);
