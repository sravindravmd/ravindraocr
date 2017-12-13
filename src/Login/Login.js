/**
 * Created by shwetabhat on 13/12/17.
 */
import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Alert, Button} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            password:''
        }
    }
    onPressLogin(){

        let userName = this.state.userName;
        let password = this.state.password;
        if(userName == "" && password == ""){
            Alert.alert(
                'Oops!',
                'Please enter username and password to login',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(userName == ""){
            Alert.alert(
                'Oops!',
                'Please enter username to login',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(password == ""){
            Alert.alert(
                'Oops!',
                'Please enter password to login',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(userName != "" && password != ""){
            Actions.IDlistHome()
        }

    }
    onPressSignUp(){

        let userName = this.state.userName;
        let password = this.state.password;
        if(userName == "" && password == ""){
            Alert.alert(
                'Oops!',
                'Please enter username and password to Sign up',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(userName == ""){
            Alert.alert(
                'Oops!',
                'Please enter username to Sign up',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(password == ""){
            Alert.alert(
                'Oops!',
                'Please enter password to Sign up',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(userName != "" && password != ""){
            Actions.IDlistHome()
        }

    }
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView style={{flex:1,paddingTop:80}}>
                    <View style={[styles.inputfield,styles.inputFieldTopBorder]}>
                        <Text style={styles.lableText}></Text>
                        <View style={{flex:3}}>
                            <TextInput style={styles.inp} placeholder="User Name" placeholderTextColor='rgb(128,128,128)'
                                       onChangeText={(text) => this.setState({userName:text})}
                                       value={this.state.userName}
                            />
                        </View>
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.lableText}></Text>
                        <View style={{flex:3}}>
                            <TextInput minLength={1} maxLength={60} style={[styles.inp,styles.passwordField]} placeholder="Password" placeholderTextColor='rgb(128,128,128)' secureTextEntry={true}
                                       onChangeText={(text) => this.setState({password:text})}
                                       value={this.state.password}
                            />
                        </View>
                    </View>
                   <View style={styles.loginContainer}>
                       <Button style={styles.loginContainer} onPress={()=>this.onPressLogin()} title="LOG IN"></Button>
                       <Button style={styles.loginContainer} onPress={()=>this.onPressSignUp()} title="SIGN UP"></Button>
                   </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer:{
        flexDirection:'row',
        paddingLeft:'25%',
        paddingTop:'5%'
    },
    inputfield: {
        flexDirection:'row',
        flex:1,
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:1,
        position:'relative',
        paddingTop:5,
        height:54,
    },
    lableText:{
        flex:1,
        fontSize:10,
        color:'rgb(102,102,102)',
        fontWeight:'bold',
        alignItems:'center',
        paddingTop:17,
        // paddingBottom:19,
        paddingLeft:20,
    },
    inp:{
        flex:3,
        borderBottomWidth:0,
        borderBottomColor:0,
        fontSize:16,
        justifyContent:'flex-start',


    },
    loginContainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:36,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        borderColor:'red'
    },
    loginButton:{
        borderRadius:43,
        height:48,
        backgroundColor:'rgb(21,147,204)'
    },
    loginText:{
        color:'#FFF',
    },
    inputFieldTopBorder:{
        borderTopWidth:1,
        borderTopColor:'rgba(0,0,0,0.1)',
    },
    passwordField:{
        width:150,
    },
    loginContainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:36,
        marginLeft:20,
        marginRight:20,
    },
});
