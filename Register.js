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
			cpass:'',
			con:'',
			utype:'',
			uuid:'',


		};
	}

	register(uname,pass,cpass,con,utype,uuid){
	    var c=0;
	    const {navigate} =this.props.navigation;
	    var msg='';
	    user = getDatabase().ref('/user');
	    user.on('value',(dataSnapshot)=>{
		  
		  
		  dataSnapshot.forEach((child)=>{
		     console.log(child.val().username+" "+child.val().password);
		     if(child.val().username == uname){
		     	c=1;
		     }
		   });
		});
		if(c==1){
			Alert.alert("username already exists");
		}
		else if(pass == cpass){
			var adduser = {
				username:uname,
				password:pass,
				utype:utype
			}
			user.push(adduser);
			Alert.alert("registration successful");
			navigate("Home",{screen:'Home'});
		}

	}

	render(){
		return(
			<View>
				<Text>Username:</Text>
				<FormInput onChangeText={(text)=>this.setState({uname:text})}/>
				<Text>Password:</Text>
				<FormInput onChangeText={(text)=>this.setState({pass:text})}/>
				<Text>Re-enter Password:</Text>
				<FormInput onChangeText={(text)=>this.setState({cpass:text})}/>
				<Text>Contact:</Text>
				<FormInput onChangeText={(text)=>this.setState({con:text})}/>
				<Text>UUID:</Text>
				<FormInput onChangeText={(text)=>this.setState({uuid:text})}/>
				<Text>User Type:</Text>
				<TouchableOpacity onPress={()=> this.setState({utype:'student'})}><Text>Student</Text></TouchableOpacity>
				<TouchableOpacity onPress={()=> this.setState({utype:'teacher'})}><Text>Teacher</Text></TouchableOpacity>  
				<Button onPress={()=>this.register(this.state.uname,this.state.pass,this.state.cpass,this.state.con,this.state.utype,this.state.uuid)} title='Register'/>
			</View>


		);
	}
} 