import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
		);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#009688',
		fontSize: 18,
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'titillium_web_bold'
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#009688',
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };
