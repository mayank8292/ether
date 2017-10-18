import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Web3 from 'web3';

var provider=new Web3.providers.HttpProvider('http://metastock-ninantharakan.c9users.io:8080');
var ETHEREUM_CLIENT = new Web3(provider);
var acct=ETHEREUM_CLIENT.eth.accounts;

var MasterContractABI = [{"constant":false,"inputs":[{"name":"_userID","type":"string"},{"name":"_pwd","type":"string"},{"name":"_role","type":"string"},{"name":"userAddr","type":"address"}],"name":"addUser","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"useraddress","type":"address"}],"name":"getuserID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];

var master_Addr='0xc1bad141c1ec1845f260026b6f2d5c84859689bc';
var usr_addr='0x8d385530545f2b17cc3055394b5793c3c4a32902';


var MyMasterContract= ETHEREUM_CLIENT.eth.contract(MasterContractABI).at(master_Addr);

const style = {
  margin: 15,
};

class Login extends Component {
    

    constructor(props) {
    super(props);
    this.state = {
      username:'',
      OTP:'',
      password:''
    };
  }

       handleClick(event){
        if(this.state.username.length>0 && this.state.password.length>0 && this.state.OTP.length>0){
            var res = MyMasterContract.getuserID.call(usr_addr,{from:acct[0]});
            console.log(res);
            if(res)
            {
                this.props.history.push('/Dashboard');
            }
            else{
                this.props.history.push('/Login');
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
          <AppBar title="XXXID Manager"
           /> 
           
            <h2>Login</h2>
            
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
          OTP : 
            <TextField
               hintText="Enter OTP"
               floatingLabelText="OTP"
               onChange = {(event,newValue) => this.setState({OTP:newValue})}
               />
                <br/>
            <RaisedButton label="Login" primary={true} style={style} 
                onClick={(event) => this.handleClick(event)}/>
               
           </div>
            </MuiThemeProvider>
        </div>
        );
    }
    
}
export default Login;
         