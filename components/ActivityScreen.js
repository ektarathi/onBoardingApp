import * as React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Animated,
} from "react-native";
import { Slider } from "react-native-elements";

const ActivityScreen = ({ navigation }) => {
	const [value, setValue] = React.useState(0);
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/clouds.png")}
				style={styles.image}
			>
				<Text>This is an activity screen</Text>
			</ImageBackground>
		</View>
	);
};

export default ActivityScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "contain",
		justifyContent: "center",
		width: "100%",
		alignItems: "center",
	},
});
