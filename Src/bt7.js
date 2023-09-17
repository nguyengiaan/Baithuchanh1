import React from 'react'
import { TextInput,Text,View,StyleSheet,Button} from 'react-native'
import { Alert } from 'react-native-web';
const style=StyleSheet.create({
    container:{
        padding:20,

    },
    label:{
        fontWeight:"bold",
        fontSize:18,

    },
    input:{
        marginTop:10,
        backgroundColor:"rgba(0,0,0,0.1)",
        padding:10,
        borderRadius:5,
    },

});
const bt7=()=>{
    return(
        <View style={style.container}>
            <Text style={style.label}>
                What your name ?
            </Text>
            <TextInput style={style.input}
            placeholder='John Doe'
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={(text)=>setName(text)}
            value={name}/>
            <Button title='say hello' onPress={()=>{alert(`hello, ${name}`); setName("") }} />

        </View>
    )
}
export default bt7