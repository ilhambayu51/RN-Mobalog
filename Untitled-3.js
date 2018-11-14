import React from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, TextInput, Button} from 'react-native';
import Second from './Second';


class Login extends React.Component{
	render() {
		return(
			<View style={kata.container}>
				<View style={kata.logoContainer}>
					<Text style={kata.title1}>Welkam Tu Mobalog</Text>
					<Image style={kata.logo}
					source={require('./3.png')}/>
					<Text style={kata.title}> Fef Secen Tu Bi Enemis Ricis De Betelfil</Text>
				</View>
			</View>
		);
	}
}
const kata = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#191919',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 300,
		height: 200,
		alignItems: 'center',
	},
	title1: {
		fontSize: 24,
		color: '#fff'
	},
	title: {
		color: '#fff',
		marginTop: 20,
		textAlign: 'center',
		width: 170,
	},
});
export default Login;