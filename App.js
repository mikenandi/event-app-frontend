import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import Home from "./components/Home";
import Payments from "./components/Payment";
import color from "./components/colors";
import {StatusBar, Text} from "react-native";
import Left from "./components/TopBar/Left";
import Right from "./components/TopBar/Right";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import {Provider} from "react-redux";
import {store} from "./components/Store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyAuth() {
	return (
		<Stack.Navigator initialRouteName='login'>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Signup'
				component={Signup}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='homepage'
			screenOptions={{
				tabBarActiveTintColor: "black",
				headerShown: true,
			}}>
			<Tab.Screen
				name='property list'
				component={Home}
				options={{
					tabBarLabel: "",
					title: "",
					tabBarIcon: ({color, size}) => (
						<AntDesign name='home' size={size} color={color} />
					),
					headerLeft: () => <Left title='gudsurvey' />,
					headerRight: () => <Right />,
					headerShown: true,
				}}
			/>

			{/* <Tab.Screen
				name='Payments'
				component={Payments}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<AntDesign name='swap' size={size} color={color} />
					),
					headerLeft: () => <Left title='Payments' />,
				}}
			/> */}
			<Tab.Screen
				name='Messages'
				component={Messages}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Ionicons name='chatbox-outline' size={size} color={color} />
					),
					headerLeft: () => <Left />,
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					title: "",
					tabBarLabel: "",
					tabBarIcon: ({color, size}) => (
						<Ionicons name='person-outline' size={size} color={color} />
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
				<StatusBar backgroundColor={color.lightblue} />
				{false ? <MyAuth /> : <MyTabs />}
			</NavigationContainer>
		</Provider>
	);
}
