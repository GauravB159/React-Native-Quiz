import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class Home extends React.Component {
   static navigationOptions = {
    title: 'Welcome ',
  }		
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <View style={styles.button}>
        <Button onPress={ () => navigate("Teacher",{screen : "Teacher"}) } title='Teacher'/>
      </View>  
      <View style={styles.button}>
        <Button onPress={ () => navigate("Student",{screen : "Student"}) } title='Student'/>
      </View>
      </View>
    );
  }
}


const styles=StyleSheet.create({
  button:{
    margin:20
  }
})