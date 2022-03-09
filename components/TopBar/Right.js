import {memo} from "react";
import {View, StyleSheet, Modal} from "react-native";
import {MaterialIcons, EvilIcons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import Search from "../Home/SearchModal";
import {
	showSearch,
	showPropertyType,
	showRequest,
} from "../Store/homePageStore/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import PropertyType from "../Home/AddListing/TypeSelection";
import {Caption} from "../Typography";
import color from "../colors";
import Request from "../Home/Requests";

function Right(props) {
	const searchVisible = useSelector((state) => {
		return state.showModal.searchVisible;
	});

	const propertyTypeVisible = useSelector((state) => {
		return state.showModal.propertyTypeVisible;
	});

	const requestVisible = useSelector((state) => {
		return state.showModal.requestVisible;
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

			<EvilIcons
				name='search'
				size={28}
				color='black'
				style={styles.iconSearch}
				onPress={handleSearchVisible}
			/>
			<AntDesign
				name='plussquareo'
				size={24}
				color='black'
				style={styles.iconPlus}
				onPress={handlePropertyTypeVisible}
			/>

			<Modal transparent={false} visible={searchVisible}>
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
		padding: 6,
		backgroundColor: color.primary,
		borderRadius: 6,
		right: 23,
		top: 0,
	},
});

export default memo(Right);
