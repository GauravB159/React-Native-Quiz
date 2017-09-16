import React from 'react';
import { StyleSheet, Text, View, FlatView,Alert,TouchableOpacity } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class Home extends React.Component {
   static navigationOptions = {
    title: 'Question No. ${navigation.state.params.ques.no}',
  }
  press(){
     
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
    return (
      <View>
      
        <Text>{ques.ques}</Text>
        <TouchableOpacity onPress={this.press} value={ques.options.option1} correct={ques.correct}><Text>{ques.options.option1}</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.press} value={ques.options.option2} correct={ques.correct}><Text>{ques.options.option2}</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.press} value={ques.options.option3} correct={ques.correct}><Text>{ques.options.option3}</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.press} value={ques.options.option4} correct={ques.correct}><Text>{ques.options.option4}</Text></TouchableOpacity>

      
      </View>
    );
  }
}


const styles=StyleSheet.create({
  button:{
    margin:20
  }
})