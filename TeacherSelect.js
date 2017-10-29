import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import * as firebase from 'firebase';
import {getDatabase} from './database';


export default class TeacherSelect extends React.Component {
  
  constructor(props){
    super(props);
    this.sclass = this.props.navigation.state.params.class;
    this.sub = this.props.navigation.state.params.sub;
    var db = '/class/'+this.sclass+'/'+this.sub;
    this.qset = getDatabase().ref(db);
    this.state={
      ques:'',
      c:''
    }
  }
  static navigationOptions = ({navigation}) => {
    return{
      title: 'Welcome',
    }
  };		
  componentDidMount(){
    this.listenForQues(this.qset);
  }
  listenForQues(qset){
    qset.on('value',(dataSnapshot)=>{
      var ques =[];
      var c =0;
      dataSnapshot.forEach((child)=>{
        if (c>0){
          ques.push({
            no:c,
          });
        }
        c=c+1;
      });
      
      this.setState({
        ques:ques,
        c:c
      })


    });
  }
	
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>Quiz List: </Text>
        <FlatList data={this.state.ques} renderItem={({item})=><TouchableOpacity activeOpacity={0.5} onPress={()=>navigate("TeacherQuestion",{class:this.sclass,sub:this.sub,c:item.no})}><Text style={styles.text}>Quiz No. {item.no}</Text></TouchableOpacity>}/>
        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigate("Add",{class:this.sclass,sub:this.sub,c:this.state.c}) }><Text style={styles.add}>Click to Add a Quiz</Text></TouchableOpacity>
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
  },
  add:{
    fontSize:25,
    marginLeft:"5%",
    color:'green'
  }
})