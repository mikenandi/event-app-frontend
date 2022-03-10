import { useState } from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity} from "react-native";

import { Caption,BodyS } from "../Typography";

export default function Profile(props) {

	const [ProfileData, setProfileData] = useState([
		{ id: 1, username: 'Michael N.',firstName: 'Michael',lastName: 'Nandi', emal: 'mikenandy@gmail.com', phone: '0745736716' },
		{ id: 2, username: 'Stephen M',firstName: 'Stephen',lastName: 'Mhuli', emal: 'stevemshible@gmail.com', phone: '0742726716' }
	]);

	const editProfileHandler = ()=>{}


	return (
		<View style={styles.container}>
			<View style={styles.ImageContainer}>
				<Image 
				source={require("./../../assets/mike.jpg")}
				style={styles.profileImage}
				/>
				<View style={styles.profileImageText}>
					<BodyS style={styles.NormalText}>mikenandy@gmail.com </BodyS>
					<Caption>Michael N.</Caption>
				</View>
			</View>
			<TouchableOpacity
			 style={styles.editButton}
			 onPress={editProfileHandler}
			>
				<Text style={styles.editProfileTxt}>Edit Profile</Text>
			</TouchableOpacity>
			<View style={styles.profileInfo}>

			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center'
	},
	ImageContainer: {
		marginTop: 10,
		flexDirection: 'row',
	},
	profileImage: {
		marginLeft: 10,
		width: 100,
		height: 100,
		borderRadius: 50
	},
	profileImageText: {
		marginLeft:20,
		marginTop: 20
	},
	editButton: {
		marginTop: 30,
		width: 140,
		height: 40,
		borderWidth: 0.5,
		borderColor: 'grey',
		borderRadius: 20
	},
	editProfileTxt: {
		// marginHorizontal:20,
		// marginVertical:40
		fontSize: 20,
		marginLeft: 10,
		marginTop: 4
	},
	NormalText: {
		fontSize: 16
	},
	profileInfo: {

	},

});
