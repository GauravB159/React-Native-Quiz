import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#EEE',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    paddingTop: 5
  },
});
class Question extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text style={{fontSize:18,marginTop:10}} onPress={()=> this.props.onMenuClick(this.props.num)}>      Question No. {this.props.num}</Text>
      </View>
    );
  }
}
export default function Menu({ onItemSelected,onMenuItemClick,numQuestions,addQuestion }) {
  let questions=[];
  for(let i = 1;i <= numQuestions; i++ ){
    questions.push(<Question key={i} num={i} onMenuClick={onMenuItemClick}/>)
  }
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Teacher's Name</Text>
      </View>
      <View
        style={styles.item}
      >
        <Text style={{fontSize:18,fontWeight: "300"}}>Questions:</Text>
        {questions}
      </View>
      <View>
        <TouchableOpacity onPress={addQuestion}>
          <Text style={{fontSize:18,fontWeight: "300"}}>      Add a Question</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};