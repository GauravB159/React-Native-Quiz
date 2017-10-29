import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button , FlatList } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import {getDatabase} from './database';

export default class Teacher extends React.Component {

   static navigationOptions = ({navigation}) => {
    return{
      title: 'Welcome',
    }
  };		
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={()=> navigate("TeacherQuiz",{class:'seit'}) }>
          <Text style={styles.text}>Prepare or Alter a quiz for: SEIT</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={()=> navigate("TeacherQuiz",{class:'teit'}) } title='TEIT'>
          <Text  style={styles.text}>Prepare or Alter a quiz for: TEIT</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={()=> navigate("TeacherQuiz",{class:'beit'}) } title='BEIT'>
          <Text  style={styles.text}>Prepare or Alter a quiz for: BEIT</Text>
        </TouchableOpacity> 
      </View>
    );

  }
}

const styles = StyleSheet.create({
  button:{
    left:"20%",
    width:230,
    marginTop:"20%",
    backgroundColor:"cornflowerblue",
    padding:20
  },
  text:{
    color:"white",
    fontSize:20
  }
});