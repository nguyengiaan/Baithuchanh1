import React,{useState} from 'react'
import { Text,Button,View } from 'react-native'
const bt4=()=>{
    const[pressCount,setPressCount]=useState(0);
    return(
        <View style={{alignItems:"center",marginTop:20}}>
            <Text>
                hãy nhấn nút này:{pressCount} time(s)
            </Text>
            <Button title={'hãy nhấn'} onPress={()=>setPressCount(pressCount+1)}/>
        </View>
    )
}
export default bt4