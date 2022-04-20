import React, {memo} from "react";
import {View, Image, StyleSheet} from "react-native";
import color from "../../../colors";
import {add_comma} from "../../../../Helpers/addCommaToNumber";
import {Body, BodyS, Caption, HeadingS} from "../../../Typography";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {hideDetail} from "../../../Store/home-store/modalSlice-home";

function TopBar(props) {
	const dispatch = useDispatch();

	const handleHideSearch = () => {
		dispatch(hideDetail());
	};

	return (
		<View style={styles.topbar}>
			<Ionicons
				name='arrow-back-sharp'
				size={30}
				color={color.dimblack}
				onPress={handleHideSearch}
				style={styles.backIcon}
			/>
			<HeadingS>House name.</HeadingS>
		</View>
	);
}

const styles = StyleSheet.create({
	topbar: {
		flexDirection: "row",
		backgroundColor: color.lightgray,
		alignItems: "center",
		paddingBottom: 5,
	},
	backIcon: {
		marginRight: 10,
		marginLeft: 5,
	},
});

export default memo(TopBar);
