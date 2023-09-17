import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const bt1=()=>{
    return(
        <View style={Style.ViewStyle}>
            <text style={Style.TextStyle}>
                Hello world

            </text>
        </View>
    )
}

var Style=StyleSheet.create(
    {
        ViewStyle:{
          width:100,
          height:100,
          backgroundColor:'red',
          justifyContent:'center',
        },
    }
)
export default bt1
