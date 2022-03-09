import {memo} from "react";
import {View, StyleSheet, Modal} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import Search from "../Home/SearchModal/Search";
import {showSearch, showPropertyType} from "../Store/homePageStore/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import PropertyType from "../Home/AddListing/TypeSelection/PropertyType";

function Right(props) {
	const searchVisible = useSelector((state) => {
		return state.showModal.searchVisible;
	});

	const propertyTypeVisible = useSelector((state) => {
		return state.showModal.propertyTypeVisible;
	});

	const dispatch = useDispatch();

	const handleSearchVisible = () => {
		dispatch(showSearch());
	};
	const handlePropertyTypeVisible = () => {
		dispatch(showPropertyType());
	};
	return (
		<View style={styles.container}>
			<MaterialIcons
				name='search'
				size={28}
				color='black'
				style={styles.iconSearch}
				onPress={handleSearchVisible}
			/>
			<AntDesign
				name='plussquareo'
				size={26}
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
		marginRight: 25,
	},
});

export default memo(Right);
