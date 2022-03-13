import React, {memo} from "react";
import {View, StyleSheet, Pressable} from "react-native";
import color from "../../../../colors";
import {useDispatch} from "react-redux";
import {kitchenSpaceStatus} from "../../../../Store/home-store/houseSlice";
import {useSelector} from "react-redux";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {BodyS} from "../../../../Typography";

function KitchenSpace(props) {
	const show = useSelector((state) => {
		return state.house.kitchenSpace;
	});

	const dispatch = useDispatch();

	const handleActive = () => {
		dispatch(kitchenSpaceStatus());
	};

	return (
		<Pressable activeOpacity={0.5} onPress={handleActive}>
			<View style={styles.typeContainer}>
				<MaterialCommunityIcons
					name='stove'
					size={24}
					color={show ? color.secondary : color.grey}
					style={show ? styles.activeIcon : styles.inactiveIcon}
				/>
				<BodyS style={styles.typeText}>kitchen space</BodyS>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	typeContainer: {
		margin: 5,
		flexDirection: "row",
		alignItems: "center",
	},

	inactiveIcon: {
		marginRight: 10,
		padding: 9,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: color.grey,
		marginVertical: 5,
	},
	activeIcon: {
		marginRight: 10,
		backgroundColor: color.lightgray,
		padding: 10,
		borderRadius: 20,
		marginVertical: 5,
	},
	typeText: {
		textTransform: "capitalize",
	},
});

export default memo(KitchenSpace);
