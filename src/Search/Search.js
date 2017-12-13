/**
 * Created by shwetabhat on 13/12/17.
 */
import React, {Component} from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import {Actions} from 'react-native-router-flux'
export default class SearchIDList extends Component{
    constructor(){
        super();
        this.state={
            textData:null,
        }
    }
    searchIconClick(text){
       alert("Search clicked")
    }
    render(){
        return(
            <View style={[{flex:1},styles.bgColor,{paddingTop:20}]}>
                <ScrollView>
                    <View style={[styles.HeaderMainView]}>

                            <View style={{flex:1, alignItems:'flex-start',paddingBottom:'5%'}}>
                                <TouchableOpacity onPress={() => Actions.pop()}>
                                    <Image source={require('./../../images/close_dashnoard.png')}/>
                                </TouchableOpacity>
                            </View>
                                <View style={{flex:1,paddingBottom:'15%'}}>
                                    <Text style={[ styles.headerTitle,styles.fontSize18]}>SEARCH</Text>
                                </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={styles.searchMainView}>
                            <View style={styles.searchBox}>
                                <ScrollView>
                                    <TextInput underlineColorAndroid='transparent' placeholder="What you want to search" value={this.state.textData} onChangeText={(text) => this.searchIconClick(text)} placeholderTextColor='Black'
                                               style={[styles.searchInputStyle1]}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = {
    flex1:{
        flex:1
    },
    marginTop0: {
        marginTop: -10,
        marginBottom: 10,
    },
    fav: {
        flex: 1,
        paddingVertical: 10
    },
    latestView: {
        backgroundColor: '#fff',
        marginTop: 8,
        flexDirection: 'column'
    },
    bgColor: {
        backgroundColor: '#fff',
        flex:1
    },
    favourite: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 10

    },
    searchView: {
        flex: 1,

    },
    paddingLeft10: {
        paddingLeft: 10
    },
    paddingRight10: {
        paddingRight: 10
    },
    searchMain1: {
        flex: 4,
        justifyContent: 'center',
    },
    searchBox1: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(7,124,229)',
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
    },
    searchInputStyle1: {
        height: 48,
        textAlign: 'center',
        paddingRight: 20,
        color: 'black'
    },
    searchIconStyle1: {
        position: 'absolute',
        top: 15,
        right: 0,
        height: 30,
        width: 30,
    },
    closeIconStyle: {
        position: 'absolute',
        top: 17,
        padding: 5,
        right: 37,
        height: 27,
        width: 27
    },
    searchBox: {
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(7,124,229)',
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    searchInputStyle: { height: 48, textAlign: 'left', paddingRight: 20, color: 'rgb(39,39,39)' },
    searchIconStyle: {
        position: 'absolute',
        top: 10,
        right: -5,
        padding: 10,
    },
    searchMainView: {
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    directionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    positionRelative: {
        position: 'relative'
    },
    HeaderMainView: {
        backgroundColor: '#077CE5',
        height: 38,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        elevation: 2,
    },
    directionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paddingHorizontal20: {
        paddingHorizontal: 20
    },
    bgImgStyles: {
        width: 25,
        marginTop: 15,
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    headerTitle: { color: '#fff', paddingLeft:'40%'},
    fontSize18: {
        fontSize: 18,
    },
}