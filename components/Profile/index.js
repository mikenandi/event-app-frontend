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
					<Text style={styles.NormalText}>mikenandy@gmail.com </Text>
					<Text style={styles.NormalText}>Michael N.</Text>
				</View>
			</View>
			<TouchableOpacity
			 style={styles.editButton}
			 onPress={editProfileHandler}
			>
				<Text style={styles.editProfileTxt}>Edit Profile</Text>
			</TouchableOpacity>
			<View style={styles.profileInfo}>
				<View style={styles.userInfo}>
					<Text style={styles.userInfoLabel}>First Name:</Text>
					<Text style={styles.userInfoText}>Michael</Text>
				</View>
				<View style={styles.userInfo}>
					<Text style={styles.userInfoLabel}>Last Name:</Text>
					<Text style={styles.userInfoText}>Nandi</Text>
				</View>
				<View style={styles.userInfo}>
					<Text style={styles.userInfoLabel}>Email:</Text>
					<Text style={styles.userInfoText}>michaelnandi@gmail.com</Text>
				</View>
				<View style={styles.userInfo}>
					<Text style={styles.userInfoLabel}>Phone Number:</Text>
					<Text style={styles.userInfoText}>0745392939</Text>
				</View>

			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'flex-start',
	},
	ImageContainer: {
		marginLeft: 15,
		alignItems: 'center',
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
		marginLeft:12,
		marginTop: 20
	},
	editButton: {
		display: 'flex',
		marginLeft: 90,
		alignItems: 'center',
		marginTop: 22,
		width: 180,
		height: 35,
		borderWidth: 0.5,
		borderColor: 'grey',
		borderRadius: 20
	},
	editProfileTxt: {
		fontSize: 18,
		marginTop: 2
	},
	NormalText: {
		fontSize: 15,
		padding: 2
	},
	profileInfo: {
		marginTop:20,
		alignItems: 'flex-start'
	},
	userInfo: {
		// borderWidth: 0.5,
		// borderColor: 'gray',
		padding: 5,
		margin:5,
		display: 'flex',
		flexDirection: 'row'

	},
	userInfoLabel: {
		margin: 4,
		fontSize: 17,
		color: 'grey'
	},
	userInfoText: {
		margin: 4,
		fontSize: 17,
	}

});
