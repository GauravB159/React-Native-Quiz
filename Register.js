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
import { FormLabel, FormInput} from 'react-native-elements';
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
			utype:'teacher',
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
			<View style={{marginTop:30}}>
				<View>
					<Text style={styles.text}>Username:</Text>
					<FormInput style={styles.input} onChangeText={(text)=>this.setState({uname:text})}/>
				</View>
				<View>
					<Text style={styles.text}>Password:</Text>
					<FormInput style={styles.input} secureTextEntry={true} onChangeText={(text)=>this.setState({pass:text})}/>
				</View>
				<View>
					<Text style={styles.text}>Re-enter Password:</Text>
					<FormInput style={styles.input} secureTextEntry={true} onChangeText={(text)=>this.setState({cpass:text})}/>
				</View>
				<View>
					<Text style={styles.text}>Contact:</Text>
					<FormInput keyboardType="phone-pad" style={styles.input} onChangeText={(text)=>this.setState({con:text})}/>
				</View>
				{this.state.utype === 'student' ? <View>
					<Text style={styles.text}>UUID:</Text>
					<FormInput  keyboardType="numeric" style={styles.input} onChangeText={(text)=>this.setState({uuid:text})}/>
				</View> : null}
				<View>
					<Text style={styles.text}>User Type:</Text>
					<TouchableOpacity onPress={()=> this.setState({utype:'student'})}><Text style={{fontSize:20,marginLeft:"10%",color:this.state.utype === 'student' ? 'black' : 'grey'}}>Student</Text></TouchableOpacity>
					<TouchableOpacity onPress={()=> this.setState({utype:'teacher'})}><Text style={{fontSize:20,marginLeft:"10%",color:this.state.utype === 'teacher' ? 'black' : 'grey'}}>Teacher</Text></TouchableOpacity>
				</View>  
				<View style={styles.button}><Button onPress={()=>this.register(this.state.uname,this.state.pass,this.state.cpass,this.state.con,this.state.utype,this.state.uuid)} title='Register'/></View>
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