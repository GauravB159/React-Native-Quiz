import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button , FlatList } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import {getDatabase} from './database';

export default class Teacher extends React.Component {
  constructor(props){
    super(props);
    this.sclass = this.props.navigation.state.params.class;
    this.sub = this.props.navigation.state.params.sub;
    this.quizNo = this.props.navigation.state.params.c;
    
    this.state={
      ques:'',
    }
  }

  componentDidMount(){
    this.listenForQues(this.qset);
  }
  listenForQues(qset){
    var db = '/class/'+this.sclass+'/'+this.sub+'/quiz'+this.quizNo;
    var qset = getDatabase().ref(db);
    qset.on('value',(dataSnapshot)=>{
      var ques =[];
      var c =1;
      dataSnapshot.forEach((child)=>{
        ques.push({
          no:c,
          ques:child.val().Ques,
          options:child.val().options,
          correct:child.val().correct
        });
        c=c+1;
      });
      
      this.setState({
        ques:ques
      })

    });
  }

   static navigationOptions = ({navigation}) => {
    return{
      title: 'Welcome',
    }
  };		
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>Question List: </Text>
        <FlatList data={this.state.ques} renderItem={({item})=><TouchableOpacity onPress={()=>navigate("Question",{ques:item})}><Text style={styles.text}>Question No. {item.no}</Text></TouchableOpacity>}/>
        <View style={styles.button}>
          <Button style={styles.button} onPress={()=> navigate("Add",{class:this.sclass,sub:this.sub,c:this.quizNo}) } title='Add Question'/>
        </View>
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
  },
  button:{
	  width:100,
    left:"35%",
    top:"3%"
	}
})