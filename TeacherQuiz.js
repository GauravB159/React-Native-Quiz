import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import * as firebase from 'firebase';
import {getDatabase} from './database';


export default class TeacherQuiz extends React.Component {

	constructor(props){
		super(props);
		const { navigate } = this.props.navigation;
		this.sclass = this.props.navigation.state.params.class;
		var db = '/class/'+this.sclass;

		this.subset = getDatabase().ref(db);
		this.state={
			sub:''
		};
	}
	componentDidMount(){

	  this.listenForSub(this.subset);
	}
	listenForSub(sclass){
	  sclass.on('value',(dataSnapshot)=>{
	    var sub =[];
	    
	    dataSnapshot.forEach((child)=>{
	      sub.push({
	        sub:child.val().name
	      });
	    });
	    this.setState({
	      sub:sub
	    })

	  });
	}
  	
	render() {
	const { navigate } = this.props.navigation;
	return (
		<View>
			<Text style={styles.title}>Subject List: </Text>
	    <FlatList data={this.state.sub} renderItem={({item},index)=><TouchableOpacity key={index} onPress={()=>navigate("TeacherSelect",{sub:item.sub,class	:this.sclass})}><Text style={styles.text}>{item.sub}</Text></TouchableOpacity>}/>
	  </View>
	);
}
}

const styles=StyleSheet.create({
	text:{
	  fontSize:25,
	  marginLeft:"5%",
	},
	title:{
		fontSize:30
	}
})