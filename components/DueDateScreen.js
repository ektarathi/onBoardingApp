import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button, Overlay } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const DueDateScreen = ({ navigation }) => {
	const [date, setDate] = React.useState(new Date());
	const [mode, setMode] = React.useState("date");
	const [visible, setVisible] = React.useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		console.log(selectedDate);
		setDate(currentDate);
	};

	const handleDueDate = (date) => {
		let currentDate = new Date();
		if (date < currentDate) {
			setVisible(!visible);
		} else {
			navigation.navigate("Activity");
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/background_image.png")}
				style={styles.image}
			>
				<View style={styles.content}>
					<View style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}>
						<Text style={styles.heading}>Select your estimated due date.</Text>
					</View>
					<DateTimePicker
						testID="dateTimePicker"
						value={date}
						mode={mode}
						is24Hour={true}
						display="default"
						onChange={onChange}
					/>
					<View style={styles.button}>
						<Button
							title="Continue"
							buttonStyle={{
								backgroundColor: "#86ded8",
								borderRadius: 0,
								padding: 15,
							}}
							onPress={() => handleDueDate(date)}
						/>
					</View>
				</View>
				<Overlay
					isVisible={visible}
					overlayStyle={{
						width: "80%",
						backgroundColor: "#3d3a32",
						borderRadius: "15",
						paddingTop: 20,
						paddingLeft: 20,
						paddingRight: 20,
					}}
				>
					<Text style={styles.text}>
						Your due date needs to be in the future. Please correct your input
					</Text>
					<Button
						title="Ok"
						type="clear"
						onPress={() => setVisible(false)}
					></Button>
				</Overlay>
			</ImageBackground>
		</View>
	);
};

export default DueDateScreen;

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
		top: "55%",
		height: "100%",
	},
	button: {
		position: "absolute",
		bottom: "55%",
		width: "100%",
	},
	heading: {
		fontSize: 18,
		paddingTop: 10,
		textAlign: "center",
		paddingBottom: 10,
	},
	text: {
		color: "#fff",
		textAlign: "center",
	},
});
