import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import DisplayCheckbox from "./shared/Checkbox";

const CheckboxExample = ({ navigation }) => {
	const [checkbox1, setCheckbox1] = useState(false);
	const [checkbox2, setCheckbox2] = useState(false);
	const [checkbox3, setCheckbox3] = useState(false);
	const [checkbox4, setCheckbox4] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.displayChecbox}>
				<DisplayCheckbox
					title="Find workouts for my pregnancy"
					checked={checkbox1}
					onPress={() => setCheckbox1(!checkbox1)}
				/>
				<DisplayCheckbox
					title="Not to gain unnecessary weight"
					checked={checkbox2}
					onPress={() => setCheckbox2(!checkbox2)}
				/>
				<DisplayCheckbox
					title="Prepare for birth"
					checked={checkbox3}
					onPress={() => setCheckbox3(!checkbox3)}
				/>
				<DisplayCheckbox
					title="Feel more relaxed"
					checked={checkbox4}
					onPress={() => setCheckbox4(!checkbox4)}
				/>
			</View>
			<View style={styles.button}>
				<Button
					title="Continue"
					buttonStyle={{
						backgroundColor: "#86ded8",
						borderRadius: 0,
						padding: 15,
					}}
					onPress={() => navigation.navigate("DueDate")}
				/>
			</View>
		</View>
	);
};

export default CheckboxExample;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		width: "100%",
	},
	displayChecbox: {
		width: "90%",
	},
	button: {
		position: "absolute",
		bottom: "55%",
		width: "100%",
	},
});
