import {memo} from "react";
import {View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSelector, useDispatch} from "react-redux";
import {Caption} from "../Typography";
import color from "../colors";
import {showProfile} from "../../Store/homeStore/modalSlice";
import Profile from "../Profile";

function Right(props) {
	const dispatch = useDispatch();

	const handleProfile = () => {
		dispatch(showProfile());
	};

	const visible = useSelector((state) => {
		return state.showModal.profileVisible;
	});

	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.8} onPress={handleProfile}>
				<Ionicons
					name='ios-person-circle-outline'
					size={30}
					color={color.dimblack}
					style={styles.iconPlus}
				/>
			</TouchableOpacity>

			<Modal transparent={false} animationType='fade' visible={visible}>
				<Profile />
			</Modal>
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
