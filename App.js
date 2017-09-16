import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';
import Question from './Question'

const App = StackNavigator({

	Home:{screen:Home},
	Student:{screen:Student},
	Teacher:{screen:Teacher},
	Question:{screen:Question}

});


export default App;




