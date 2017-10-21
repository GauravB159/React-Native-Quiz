import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { FormLabel, FormInput } from 'react-native-elements';

export default class Login extends React.Component{
	render(){
		return(
			<View>
				<Text>Username:</Text>
				<TextInput/>
				<Text>Password:</Text>
				<TextInput/>
				<Text>Re-enter Password:</Text>
				<TextInput/>
				<Text>Contact:</Text>
				<TextInput/>
				<Text>UUID:</Text>
				<TextInput/>
				<Button onPress={()=>register(uname,pass,con,uuid)} title='Register'/>
			</View>


		);
	}
} 