/**
 * Created by shwetabhat on 13/12/17.
 */
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class IDlistHome extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={{flex:1,paddingTop:'10%'}}>
                <View style={[styles.HeaderMainView]}>

                    <View style={{flex:1, alignItems:'flex-start',paddingBottom:'5%'}}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Image source={require('./../../images/close_dashnoard.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>Details Page</Text>
            </View>
        )
    }
}
const styles = {
    HeaderMainView: {
        backgroundColor: '#077CE5',
        height: 38,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        elevation: 2,
    },
}