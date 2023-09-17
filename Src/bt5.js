import React from 'react'
import {View,Text,StyleSheet } from 'react-native'
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around"

    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center"
    },
});
const Square=({text,bgcolor = "#7ce0f9"})=>{
    return(
        <View style={[style.box,{backgroundColor:bgcolor}]}>
            <Text>
                {text}
            </Text>
        </View>
    )
   
}
const bt5=()=>{
    return(
        <View style={style.container}>
                <Square text="square 1"/>
                <Square text="square 2" bgcolor='#4dc2c2'/>
                <Square text="square 3" bgcolor='#ff637c'/>
        </View>
    )
}
export default bt5