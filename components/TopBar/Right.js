import {memo} from "react";
import {View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSelector, useDispatch} from "react-redux";
import {Caption} from "../Typography";
import color from "../colors";

function Right(props) {
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Ionicons
					name='ios-person-circle-outline'
					size={30}
					color={color.dimblack}
					style={styles.iconPlus}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	iconPlus: {
		marginRight: 20,
	},
	iconSearch: {
		marginRight: 20,
	},
	notifyText: {
		position: "absolute",
		padding: 4,
		backgroundColor: color.primary,
		borderRadius: 6,
		right: 25,
		top: 2,
		borderWidth: 1,
		borderColor: "white",
	},
});

export default memo(Right);
