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
        <View style={styles.login}>
          <Text style={styles.text}>
            Login as a Teacher or a Student with your given credentials. As a teacher, you can create a Quiz to give the students and as a Student you can see which Quiz you have pending. All quizzes are MCQ type with only one correct option and any amount of options can be added to each question. 
          </Text>
        </View>  
        <View style={styles.register}>
          <View style={ styles.button }>
            <Button onPress={ () => navigate("Login",{screen : "Login"}) } title='Login'/>
          </View>
          <View  style={ styles.button }>
            <Button onPress={ () => navigate("Register",{screen : "Register"}) } title='Register'/>
          </View>
        </View>
      </View>
    );
  }
}


const styles=StyleSheet.create({
  login:{
    height:"60%",
    width:"100%"
  },
  text:{
    fontSize:25,
    width:"95%",
    height:"90%",
    marginLeft:"5%",
  },
  register:{
    height:"50%",
    width:"100%"
  },
  button:{
    width:100,
    left:"35%",
    marginBottom:20
  }
})