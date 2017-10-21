import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';
import Question from './Question';
import Add from './Add';
import Login from './Login';
import Register from './Register';

const App = StackNavigator({

	Home:{screen:Home},
	Student:{screen:Student},
	Teacher:{screen:Teacher},
	Question:{screen:Question},
	Add:{screen:Add},
	Login:{screen:Login},
	Register:{screen:Register}

});


export default App;




