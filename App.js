import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/LandingScreen";
import DueDateScreen from "./components/DueDateScreen";
import ActivityScreen from "./components/ActivityScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={LandingScreen} />
				<Stack.Screen name="DueDate" component={DueDateScreen} />
				<Stack.Screen name="Activity" component={ActivityScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
