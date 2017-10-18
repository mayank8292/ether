import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Web3 from 'web3';

var provider=new Web3.providers.HttpProvider('http://metastock-ninantharakan.c9users.io:8080');
var ETHEREUM_CLIENT = new Web3(provider);
var acct=ETHEREUM_CLIENT.eth.accounts;
//console.log(acct);

var MasterContractABI = [{"constant":false,"inputs":[{"name":"_userID","type":"string"},{"name":"_pwd","type":"string"},{"name":"_role","type":"string"},{"name":"userAddr","type":"address"}],"name":"addUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"useraddress","type":"address"}],"name":"getuserID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
//var usrABI= [{"constant":false,"inputs":[{"name":"piitype","type":"string"}],"name":"getPIIdigCert","outputs":[{"name":"","type":"bytes"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"piitype","type":"string"}],"name":"deletePII","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"piiType","type":"string"},{"name":"piiValue","type":"bytes"}],"name":"verifyPII","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"piitype","type":"string"}],"name":"getPIIFlag","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"piitype","type":"string"}],"name":"getPIICertifier","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"piitype","type":"string"}],"name":"getPIIHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"piiType","type":"string"},{"name":"piiValue","type":"bytes"},{"name":"exposepii","type":"string"},{"name":"digcert","type":"bytes"}],"name":"addUpdPII","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"userID","type":"string"},{"name":"password","type":"string"}],"name":"destructMe","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"userID","type":"string"},{"name":"password","type":"string"},{"name":"piitype","type":"string"}],"name":"usrApprovePII","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"userID","type":"string"},{"name":"password","type":"string"},{"name":"userAddress","type":"address"}],"payable":false,"type":"constructor"}];

var master_Addr='0xc1bad141c1ec1845f260026b6f2d5c84859689bc';
var usr_addr='0x8d385530545f2b17cc3055394b5793c3c4a32902';


var MyMasterContract= ETHEREUM_CLIENT.eth.contract(MasterContractABI).at(master_Addr);
//var MyUserContract= ETHEREUM_CLIENT.eth.contract(usrABI).at(usr_addr);

//MyMasterContract.addUser("Ninan","Pass123","User",usr_addr,{from:acct[0]});
//console.log("Name="+ MyMasterContract.getuserID.call(usr_addr,{from:acct[0]}));

//MyUserContract.addUpdPII('SSN','123','YYY','0x123456',{from:acct[0],gas:150000});
//MyUserContract.usrApprovePII('Ninan','Pass123','SSN',{from:acct[0],gas:150000});
//console.log("User Hash = "+MyUserContract.getPIIHash.call("SSN",{from:acct[0]}));

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

console.log(MyMasterContract);
  if(this.state.username.length>0 && this.state.emailid.length>0 && this.state.password.length>0 && this.state.repassword.length>0){
   var res = MyMasterContract.addUser(this.state.username,this.state.password,"User",usr_addr,{from:acct[0]});
   console.log(MyMasterContract.getuserID.call(usr_addr,{from:acct[0]}));
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