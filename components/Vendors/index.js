import React from "react";
import {StyleSheet, View, TouchableOpacity, Modal} from "react-native";
import {Body} from "../Typography";
import color from "../colors";
import VendorService from "./VendorService";
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import RegisterVendor from "./RegisterVendor";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {showRegisterVendor} from "../../Store/VendorStore/modalSlice";

function Vendor(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModalVendor.registerVendorVisible;
	});

	const handleShowRegisterVendor = () => {
		dispatch(showRegisterVendor());
	};
	return (
		<View style={styles.screen}>
			<VendorService />
			{/* floatin action button */}
			<TouchableOpacity
				style={styles.floatingActionButton}
				activeOpacity={0.8}
				onPress={handleShowRegisterVendor}>
				<MaterialCommunityIcons name='pen' size={24} color={color.primary} />
			</TouchableOpacity>

			{/* modal for registering new vendor */}
			<Modal animationType='fad' visible={visible} transparent={false}>
				<RegisterVendor />
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

export default React.memo(Vendor);
