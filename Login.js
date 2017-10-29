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
			<View style={styles.loginpage}>
				<Text style={styles.text}>Username:</Text>
				<FormInput style={styles.input} onChangeText={(text)=>this.setState({uname:text})}/>
				<Text style={styles.text}>Password:</Text>
				<FormInput secureTextEntry={true} style={styles.input} onChangeText={(text)=>this.setState({pass:text})}/>
				<View style={styles.button}>
					<Button onPress={()=>this.checkLogin(this.state.uname,this.state.pass)} title='Login'/>
				</View>
			</View>
		);
	}
} 

const styles=StyleSheet.create({
	login:{
	  height:"60%",
	  width:"100%"
	},
	loginpage:{
		width:"75%",
		marginLeft:"12.5%",
		marginTop:"45%",
		borderColor:"black",
		borderStyle:"solid",
		borderWidth:2,
		padding:10,
		paddingLeft:0
	},
	input:{
		fontSize:18,
		height:40
	},
	text:{
	  fontSize:25,
	  marginLeft:"5%",
	},
	register:{
	  height:"50%",
	  width:"100%"
	},
	button:{
	  width:100,
	  left:"35%"
	}
  })