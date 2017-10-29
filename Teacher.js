import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button , FlatList } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import {getDatabase} from './database';

export default class Teacher extends React.Component {

   static navigationOptions = ({navigation}) => {
    return{
      title: 'Welcome ${{navigation.state.params.screen}}',
    }
  };		
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View>
        <Button onPress={()=> navigate("TeacherQuiz",{class:'seit'}) } title='SEIT'/>
        <Button onPress={()=> navigate("TeacherQuiz",{class:'teit'}) } title='TEIT'/>
        <Button onPress={()=> navigate("TeacherQuiz",{class:'beit'}) } title='BEIT'/> 
      </View>
    );

  }
}

const styles = StyleSheet.create({
  button:{
    margin:20
  }
});