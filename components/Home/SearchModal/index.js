import {View, Text, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {hideSearch} from "../../Store/home-store/modalSlice";

export default function Search(props) {
	const dispatch = useDispatch();

	const handleHideSearch = () => {
		dispatch(hideSearch());
	};

	return (
		<View>
			<Ionicons
				name='arrow-back-outline'
				size={24}
				color='black'
				onPress={handleHideSearch}
			/>
			<Text>search screen here</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
