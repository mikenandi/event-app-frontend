import {View, Text, StyleSheet, Modal} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import color from "../components/colors";
import Search from "./Home/Search";
import AddListing from "./Home/AddListing";
import {
	showSearch,
	showPropertyType,
} from "./features/homePageStore/homePageSlice";
import {useSelector, useDispatch} from "react-redux";
import PropertyType from "./Home/PropertyType";

export default function Right(props) {
	const searchVisible = useSelector((state) => {
		return state.homePage.searchVisible;
	});

	const propertyTypeVisible = useSelector((state) => {
		return state.homePage.propertyTypeVisible;
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
