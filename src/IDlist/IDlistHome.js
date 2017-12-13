/**
 * Created by shwetabhat on 13/12/17.
 */
import React, {Component} from 'react'
import {View, Button, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class IDlistHome extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={{flex:1,paddingTop:'10%'}}>
                <View style={{alignItems:'flex-end'}}>
                    <Button title="Search" onPress={()=>Actions.Search()}/>
                </View>
                <View style={{paddingTop:'45%'}}>
                    <Button title="SCAN" onPress={()=>alert("scan clicked")}/>
                </View>
                <View style={{paddingTop:'20%'}}>
                    <Button onPress={()=>Actions.IDlistDetails()} title="ID LIST View">
                    </Button>
                </View>
            </View>
        )
    }
}