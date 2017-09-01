import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { FormLabel, FormInput } from 'react-native-elements' 
import Menu from './Menu';


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Option extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>        
        <TouchableOpacity onPress={this.props.removeOption}><FormLabel>Option {this.props.num}: </FormLabel></TouchableOpacity>
        <FormInput/>
      </View>
    );
  }
}
class QForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      optionData: [],
      numOptions:1
    };
  }
  addOption(){
    this.setState({
      numOptions:this.state.numOptions+1
    })
  }
  removeOption(){
    this.setState({
      numOptions:this.state.numOptions-1
    })
  }
  render() {
    let options=[];
    for(let i=1;i <= this.state.numOptions;i++){
      options.push(<Option key={i} num={i} removeOption={this.removeOption.bind(this)}/>)
    }
    return (
    <View>
      <Text style={{fontSize:20,marginLeft:18}}>Question No. {this.props.qnum}</Text>
      <FormLabel>Question: </FormLabel>
      <FormInput/>
      {options}
      <View>
        <TouchableOpacity onPress={this.addOption.bind(this)}>
          <Text style={{fontSize:14,fontWeight: "300"}}>      Add an Option</Text>
        </TouchableOpacity>
      </View>
      <FormLabel>Correct Option/s(comma separated if multiple): </FormLabel>
      <FormInput/>
    </View>         
    );
  }
}
export default class Basic extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
      currentQuestion: 1,
      optionData: [],
      numQuestions: 1,
      numOptions:4
    };
  }
  componentWillMount(){
    let data=[];
    for(let i=0;i<this.state.numQuestions;i++){
      data.push("");
    }
    this.setState({
      optionData: data
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  initData(){
    let data={};
    data['question']="";
    data['options']=[];
    return question;
  }
  addQuestion(){
    let data=this.state.optionData;
    data.push("");
    this.setState({
      numQuestions:this.state.numQuestions+1,
      optionData:data
    })
  }
  handleMenuItemClick(val){
    this.setState({
      currentQuestion:val,
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} addQuestion={this.addQuestion.bind(this)} numQuestions={this.state.numQuestions} onMenuItemClick={this.handleMenuItemClick.bind(this)}/>;
    let options=[];
    for(let i=1;i <= this.state.numOptions;i++){
      options.push(<Option key={i} num={i}/>)
    }
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={{height:'100%',backgroundColor:'white'}}>
          <ScrollView style={{backgroundColor:'white',position:'absolute',top:20,height:'100%'}}>
            <QForm qnum={this.state.currentQuestion}/>
          </ScrollView>
        </View>
      </SideMenu>
    );
  }
}