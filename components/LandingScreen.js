import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CheckBox from "./Checkbox";

const LandingScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/background_image.png")}
				style={styles.image}
			>
				<View style={styles.content}></View>
				<View style={styles.absoluteContent}>
					<Text style={styles.heading}>What are your goals?</Text>
					<Text style={styles.subHeading}>
						Help us tailor our program to your needs.
					</Text>
					<CheckBox navigation={navigation} />
				</View>
			</ImageBackground>
		</View>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		position: "relative",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		width: "100%",
	},
	content: {
		width: "100%",
		backgroundColor: "#fff",
		position: "absolute",
		opacity: 0.7,
		top: "50%",
		height: "100%",
	},
	absoluteContent: {
		flex: 1,
		width: "100%",
		position: "absolute",
		top: "50%",
		height: "100%",
		zIndex: 9,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	heading: {
		fontSize: 30,
		paddingTop: 10,
	},
	subHeading: {
		fontSize: 20,
	},
});
