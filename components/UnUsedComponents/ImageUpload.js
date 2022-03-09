import React, {useState, useEffect} from "react";
import {Button, Image, View, Platform} from "react-native";
import * as ImagePicker from "expo-image-picker";
import color from "../colors";

export default function ImagePickerExample() {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: false,
			aspect: [9, 16],
			quality: 1,
			allowsMultipleSelection: true,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
			<Button
				title='Pick an image from camera roll'
				color={color.primary}
				onPress={pickImage}
			/>
			{image && (
				<Image
					source={{uri: image}}
					style={{width: "100%", height: "80%", marginTop: 15}}
				/>
			)}
		</View>
	);
}
