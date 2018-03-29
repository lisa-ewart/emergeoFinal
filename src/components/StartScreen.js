// #5d6d7e grey blue
// #34495e dark blue
// #d0ece7 aqua
// #abebc6 lime
// #82e0aa darker lime
// #186a3b evergreen
//#F7882F orange


import React, { Component } from 'react';
import { StyleSheet,
	    Text,
	    Button,
	    View,
	    TouchableHighlight, TouchableOpacity,
	    Image,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Auth from './Auth.js';




class StartScreen extends Component{
    render(){  
        return(
        	<View style={styles.containerStyle}>
	        	<View >
	        		<Text style={styles.textStyle}>Emergeo</Text>
	        	</View>

	        	<View >
	        		<Image style={styles.imageStyle} source={require('../../emergeologo.png')} />
	        	</View>

	        	<View >
	        		<Auth />
	        	</View>

        	</View>

     );   
    };
};


var styles = StyleSheet.create({
	containerStyle:{
		backgroundColor: '#d0ece7',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle:{
		
		fontSize:30,
		color: '#82e0aa'
	},
  imageStyle: {
  	height:300,
  	width:300,
  	
  },
 
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: '#5d6d7e',
  },
});

export default StartScreen;


