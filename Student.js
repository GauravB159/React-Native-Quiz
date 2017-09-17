import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import * as firebase from 'firebase';
import {getDatabase} from './database';


export default class Student extends React.Component {
  
  constructor(props){
    super(props);
    this.qset = getDatabase().ref('/Question');
    this.state={
      ques:'',
    }
  }

  componentDidMount(){
    this.listenForQues(this.qset);
  }
  listenForQues(qset){
    qset.on('value',(dataSnapshot)=>{
      var ques =[];
      var c =1;
      dataSnapshot.forEach((child)=>{
        ques.push({
          no:c,
          ques:child.val().ques,
          options:child.val().options,
          correct:child.val().correct
        });
      });
      c=c+1;
      this.setState({
        ques:ques
      })

    });
  }
   static navigationOptions = {
    title: 'Welcome ${navigation.state.params.screen}',
  }		
  render() {
    console.log(this.state.ques);
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList data={this.state.ques} renderItem={({item})=><TouchableOpacity onPress={()=>navigate("Question",{ques:item})}><Text>Question No. {item.no}</Text></TouchableOpacity>}/>
      </View>
    );
  }
}