import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default  MessageScreen=()=>{
    return (
      <View style={style.hello}>
      <Text>Hello World</Text>
    </View>
    )
}

const style= StyleSheet.create({
  hello:{
    flex:1,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center"
  }
})