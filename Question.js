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
    console.log(ques.correct);
    this.setState({
      correct:ques.correct
    })
  }
  press(){
     console.log(this.value);
     console.log(this.state.correct);
     if(this.value==this.correct){
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
        <FlatList data = {list} renderItem={({item})=><TouchableOpacity onPress = {this.press.bind(this)} correct={ques.correct} value={item.value}><Text>{item.value}</Text></TouchableOpacity>}/>

      
      </View>
    );
  }
}


const styles=StyleSheet.create({
  button:{
    margin:20
  }
})