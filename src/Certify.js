import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  margin: 15,
};


 
class Certify extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
        value:''
    };
  }

 handleChange = (event, index, value) => this.setState({value});

    render() {
    return (
        
       <div>
        <MuiThemeProvider>
          <div className="App">
          <AppBar
             title="XXXID Manager"
           /> 
           <h2>Certify Identity</h2>
      
            User ID :   
           <TextField
             hintText="Enter your Uer ID"
             floatingLabelText="User ID"
             onChange = {(event,newValue) => this.setState({userid:newValue})}
          />
           <br/>
            Attribute Type :
          
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
             <MenuItem value={1} primaryText="Passport" />
             <MenuItem value={2} primaryText="Address" />
          </DropDownMenu>
              <br/>
            Attribute Value : 
           <TextField
               hintText="Attribute Value"
               floatingLabelText="Attribute Value"
               onChange = {(event,newValue) => this.setState({attributevalue:newValue})}
               />
                <br/>
               <br/>
               
               I certify that
               
               <br/>
               <br/>
                <RaisedButton label="certify" primary={true} style={style} 
                onClick={(event) => this.handleClick(event)}/>
               
           </div>
            </MuiThemeProvider>
        </div>
        );
    }
}
export default Certify;