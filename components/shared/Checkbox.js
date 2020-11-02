import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

const DisplayCheckbox = ({ title, onPress, checked = false }) => {
	return (
		<CheckBox
			containerStyle={{
				backgroundColor: "transparent",
				borderColor: "transparent",
			}}
			uncheckedColor="#86ded8"
			checkedColor="#000"
			title={title}
			checked={checked}
			onPress={onPress}
		/>
	);
};

export default DisplayCheckbox;
