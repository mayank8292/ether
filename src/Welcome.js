import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 15,
};

class Welcome extends Component {
    
     handleClick(event){
         
      this.props.history.push('/Login');
 }
    
     render() {
    return (
        <div>
        <MuiThemeProvider>
        <div>
        <div className="App">
           <AppBar title="XXXID Manager"
           /> 
           
        <div>Hello ****** <br/>
        Email Id Verified <br/>
        Registration Complete
        </div>
        
        
        <RaisedButton label="Proceed to Login" primary={true} style={style} 
                onClick={(event) => this.handleClick(event)}/>
        </div>
        </div>
        </MuiThemeProvider>
        </div>
        
        );
         
     }
}
export default Welcome;