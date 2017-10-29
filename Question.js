import React from 'react';
import { StyleSheet, Text, View, FlatList,Alert,TouchableOpacity } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      correct:''
    }
  }
   static navigationOptions = {
    title: 'Question No. ${navigation.state.params.ques.no}',
  }
  ComponentDidMount(){
    const { navigate } = this.props.navigation;
    const ques = this.props.navigation.state.params.ques;
    this.setState({
      correct:ques.correct
    })
  }
  press(cor,sel){
     if(cor==sel){
      Alert.alert('Correct Answer');
     }
     else{
      Alert.alert('Incorrect Answer');
     }
  }	
  render() {
    const { navigate } = this.props.navigation;
    const ques = this.props.navigation.state.params.ques;
    
    var list = ques.options.map(function(item) {
      return {value: item};
    });
    

    return (
      <View>
              
        <Text>{ques.ques}</Text>
        <FlatList data = {list} renderItem={({item})=><TouchableOpacity onPress={()=>this.press(ques.correct,item.value)}><Text>{item.value}</Text></TouchableOpacity>}/>

      
      </View>
    );
  }
}


const styles=StyleSheet.create({
  button:{
    margin:20
  }
})