import {memo} from "react";
import {View, StyleSheet, Modal} from "react-native";
import {MaterialIcons, EvilIcons} from "@expo/vector-icons";
import {AntDesign, Octicons} from "@expo/vector-icons";
import Search from "../Home/SearchModal";
import {showPropertyType} from "../Store/home-store/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import PropertyType from "../Home/AddListing/PropertyTypes";
import {Caption} from "../Typography";
import color from "../colors";
import Request from "../Home/Requests";
import {showRequest, showSearch} from "../Store/home-store/modalSlice-home";

function Right(props) {
	const searchVisible = useSelector((state) => {
		return state.showModalHome.searchVisible;
	});

	const propertyTypeVisible = useSelector((state) => {
		return state.showModal.propertyTypeVisible;
	});

	const requestVisible = useSelector((state) => {
		return state.showModalHome.requestVisible;
	});

	const dispatch = useDispatch();

	const handleSearchVisible = () => {
		dispatch(showSearch());
	};
	const handlePropertyTypeVisible = () => {
		dispatch(showPropertyType());
	};

	const handleShowRequests = () => {
		dispatch(showRequest());
	};

	return (
		<View style={styles.container}>
			<View>
				<EvilIcons
					name='bell'
					size={28}
					color='black'
					style={styles.iconSearch}
					onPress={handleShowRequests}
				/>
				<View style={styles.notifyText} />
			</View>

			{false && (
				<EvilIcons
					name='search'
					size={28}
					color='black'
					style={styles.iconSearch}
					onPress={handleSearchVisible}
				/>
			)}

			<Modal transparent={false} visible={searchVisible} animationType='fade'>
				<Search />
			</Modal>
			<Modal
				transparent={false}
				animationType='fade'
				visible={propertyTypeVisible}>
				<PropertyType />
			</Modal>
			<Modal transparent={false} animationType='fade' visible={requestVisible}>
				<Request />
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
