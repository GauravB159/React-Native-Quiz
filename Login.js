import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SideMenu from 'react-native-side-menu';
import { FormLabel, FormInput } from 'react-native-elements';
import * as firebase from 'firebase';
import {getDatabase} from './database';

export default class Login extends React.Component{
	constructor(props){
		
		super(props);
		this.state={
			uname:'',
			pass:'',

		};
		user = getDatabase().ref('/user');
		user.on('value',(dataSnapshot)=>{
		  
		  
		  dataSnapshot.forEach((child)=>{
		     console.log(child.val().username+" "+child.val().password);
		   });
		});
	}
	
	checkLogin(uname,pass){
		const {navigate} =this.props.navigation;
		var c = 0;
		var msg = '';
		var utype = '';
		var sclass ='';
		user = getDatabase().ref('/user');
		user.on('value',(dataSnapshot)=>{
		  
		  
		  dataSnapshot.forEach((child)=>{
		     console.log(child.val().username+" "+child.val().password);
		     if(child.val().username == uname){

		     	if(child.val().password == pass){
		     		c=1;
		     		utype = child.val().utype;
		     		sclass = child.val().class;
		     	}
		     	else{
		     		msg = 'Invalid password';
		     	}
		     }
		     else{
		     	msg = 'Invalid username';
		     }
		   });
		});
		console.log(c);
		if(c==1){
			if(utype == 'student'){

				navigate("Student",{screen:'Student',class:sclass});
			}
			else{
				navigate("Teacher",{screen:'Teacher'});
			}
		}
		else{
			Alert.alert(msg);
		}
	}

	render(){
		return(
			<View>
				<Text>Username:</Text>
				<FormInput onChangeText={(text)=>this.setState({uname:text})}/>
				<Text>Password:</Text>
				<FormInput onChangeText={(text)=>this.setState({pass:text})}/>
				<Button onPress={()=>this.checkLogin(this.state.uname,this.state.pass)} title='Login'/>
			</View>


		);
	}
} 