import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Home from "./components/Home";
import Requests from "./components/Requests";
import Payments from "./components/Payment";
import color from "./components/colors";
import {StatusBar, Text} from "react-native";
import Left from "./components/Left";
import Right from "./components/Right";
import Profile from "./components/Profile";
import {Provider} from "react-redux";
import {store} from "./components/features";

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='property list'
			screenOptions={{
				tabBarActiveTintColor: color.secondary,
				headerShown: true,
			}}>
			<Tab.Screen
				name='property list'
				component={Home}
				options={{
					tabBarLabel: "",
					title: "",
					tabBarIcon: ({color, size}) => (
						<MaterialCommunityIcons
							name='home-variant'
							size={size}
							color={color}
						/>
					),
					headerLeft: () => <Left title='My properties' />,
					headerRight: () => <Right />,
				}}
			/>
			<Tab.Screen
				name='gudsurvey'
				component={Requests}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Entypo name='hand' size={size} color={color} />
					),
					headerLeft: () => <Left title='Tenant requests' />,
				}}
			/>

			<Tab.Screen
				name='Payments'
				component={Payments}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Entypo name='wallet' size={size} color={color} />
					),
					headerLeft: () => <Left title='Payments' />,
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Ionicons name='person' size={size} color={color} />
					),
					headerLeft: () => <Left title='Profile' />,
					headerShown: true,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar backgroundColor={color.lightgray} />
				<MyTabs />
			</NavigationContainer>
		</Provider>
	);
}