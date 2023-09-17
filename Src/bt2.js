import React from 'react'
import { StyleSheet,View,Button } from 'react-native'
const bt2=()=>{
    return(
        <View style={style.container}>
            <Button title='Button 1' onPress={()=>alert("Hello!")} style={style.button}>
                <text style={style.text}>
                 button 2
                </text>
            </Button>
        </View>
    )
}
var style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    button:{
        backgroundColor:"blue",
        marginTop:10,
        alignItems:"center",
        padding:10

    },
    text:{
        color:"white",
        fontSize:18,
    }

})
export default bt2