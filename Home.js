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
        <Button onPress={ () => navigate("Login",{screen : "Login"}) } title='Login'/>
      </View>  
      <View style={styles.button}>
        <Button onPress={ () => navigate("Register",{screen : "Register"}) } title='Register'/>
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