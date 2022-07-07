import React from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Modal,
	FlatList,
} from "react-native";
import {Body} from "../Typography";
import color from "../colors";
import VendorService from "./VendorService";
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import RegisterVendor from "./RegisterVendor";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {showRegisterVendor} from "../../Store/VendorStore/modalSlice";
import axios from "axios";
import {getVendorsData} from "../../Store/VendorStore/vendorSlice";

function Vendor(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.showModalVendor.registerVendorVisible;
	});

	const handleShowRegisterVendor = () => {
		dispatch(showRegisterVendor());
	};

	const vendorsData = useSelector((state) => {
		return state.vendor.vendorsData;
	});

	React.useEffect(() => {
		(async () => {
			try {
				let response = await axios({
					method: "GET",
					url: "http://evento-tz-backend.herokuapp.com/api/v1/vendor/all-vendors",
				});

				let responseDataProvided = response.data.data;

				dispatch(getVendorsData(responseDataProvided));

				return;
			} catch (error) {
				return;
			}
		})();
	}, [visible]);

	const renderItem = ({item}) => {
		return (
			<VendorService
				service={item.service}
				firstPackagePrice={item.first_package_price}
				secondPackagePrice={item.second_package_price}
				firstPackageDetails={item.first_package_description}
				secondPackageDetails={item.second_package_description}
				bussinesName={item.bussiness_name}
				phoneNumber={item.phone_number}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={vendorsData}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				contentContainerStyle={styles.contentContainer}
			/>

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
	contentContainer: {
		paddingBottom: 40,
	},
});

export default React.memo(Vendor);
