import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Web3 from 'web3';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var MasterContractABI =[{"constant":false,"inputs":[{"name":"userId","type":"string"}],"name":"getRole","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_userID","type":"string"},{"name":"_pwd","type":"string"},{"name":"_role","type":"string"}],"name":"addUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"userid","type":"string"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"userId","type":"string"}],"name":"deleteUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"useraddress","type":"address"}],"name":"getuserID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

var master_Addr='0x745aa0c3bb6441a9870347d3cc76e34606320abf';

//var MyMasterContract= ETHEREUM_CLIENT.eth.contract(MasterContractABI).at(master_Addr);
var MyMasterContract=new ETHEREUM_CLIENT.eth.Contract(MasterContractABI,master_Addr);

const style = {
  margin: 15,
};

class Register extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      username:'',
      emailid:'',
      password:'',
      repassword:'',
      value: ''
    };
  }

 handleChange = (event, index, value) => this.setState({value});
 
 handleClick(event){

  if(this.state.username.length>0 && this.state.emailid.length>0 && this.state.password.length>0 && this.state.repassword.length>0){
   var res = MyMasterContract.methods.addUser(this.state.username,this.state.password,this.state.value);
  console.log(res);
     if(res){
      this.props.history.push('/Welcome');
     }
     else{
      this.props.history.push('/Register');
     }
  }
    else{
      alert("Input field value is missing");
    }
 }
    render() {
    return (
        
       <div>
        <MuiThemeProvider>
          <div className="App">
          <AppBar
             title="XXXID Manager"
           /> 
           <h2>Welcome</h2>
      
           User ID :   
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
          />
           <br/>
           Password : 
           <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
                <br/>
          Repeat Password : 
           <TextField
               type="password"
               hintText="Enter Password again"
               floatingLabelText="Re Enter Password"
               onChange = {(event,newValue) => this.setState({repassword:newValue})}
               />
                <br/>
          Email ID : 
           <TextField
               hintText="Enter your Email ID"
               floatingLabelText="EmailID"
               onChange = {(event,newValue) => this.setState({emailid:newValue})}
               />
              <br/>
          User Type :
          
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
             <MenuItem value={1} primaryText="User" />
             <MenuItem value={2} primaryText="Verifier" />
          </DropDownMenu>
               <br/>
                <RaisedButton label="Register" primary={true} style={style} 
                onClick={(event) => this.handleClick(event)}/>
               
           </div>
            </MuiThemeProvider>
        </div>
        );
    }
}
export default Register;