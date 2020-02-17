import  React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';
import {Ionicons,FontAwesome,Octicons} from '@expo/vector-icons';

const HomeScreen =()=>{

  return(
  <View style={styles.container}>
      <View>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Settings</Text>
      </View>
      <View style={{backgroundColor:"#ffffff",flexDirection:'row'}}>
         <View style={{height:100,flex:3,borderRadius:100, justifyContent:"center",alignItems:"center"}}>
           <Image source={require('../assets/images/person-1.jpg')} style={{width:80, height:80, borderRadius:100}} />
         </View>
         <View style={{height:100,flex:6, justifyContent:"center"}} >
            <Text style={{fontSize:24, marginBottom:5}}>Caleb Okyere</Text>
            <Text style={{fontSize:13}}>Apple ID, iCloud, iTunes & App Store</Text>
         </View>
     <View style={{height:100,flex:1,justifyContent:"center"}}>
            <Ionicons 
              name="ios-arrow-forward"
              size={20}
              style={{marginLeft:10, color:'#aaaaaa'}}
            />
    </View>  
   </View>
 <View style={styles.finishing}>
        <View style={{flex:12,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
               <Text style={{paddingHorizontal:20}}>Finish setting up your iPhone</Text>
               <View style={{height:20, width:20, backgroundColor:'red',borderRadius:10, justifyContent:'center',alignItems:'center' }}>
                   <Text style={{color:"#ffffff",fontWeight:'bold'}}>1</Text>
               </View>
        </View>
        <View style={{flex:1,justifyContent:"center", alignItems:'center'}}>
            <Ionicons 
              name="ios-arrow-forward"
              size={20}
              style={ {color:'#aaaaaa'}}
            />
        </View>
        
  </View>
  <View style={{flexDirection:"column",marginTop:30}}>
  {/* Airplane mode view  */}
  <View style={{flexDirection:'row', backgroundColor:'#ffffff', justifyContent:'space-between',borderTopWidth:0.3,borderColor:'#dedede',height:50,alignItems:'center'}}>
    <View style={{flex:1.2,backgroundColor:"orange", height:25, justifyContent:'center',alignItems:'center',marginLeft:10, borderRadius:9}} >
      <Ionicons 
              name="ios-airplane"
              color="white"
              size={20}
      />
    </View>
    <View style={{flex:12,marginLeft:20}}> 
       <Text style={{fontSize:15,fontWeight:'normal'}}>Airplane Mode</Text>
    </View>
     <View style={{flex:2}}>
     <FontAwesome 
              name="toggle-off"
              size={35}
              style={ {color:'#aaaaaa'}}
            />
     </View>
  </View> 
  {/* wifi */}
  <View style={{flexDirection:'row', backgroundColor:'#ffffff', justifyContent:'space-between',borderTopWidth:0.3,borderColor:'#dedede',height:50,alignItems:'center'}}>
    <View style={{flex:1.2,backgroundColor:"blue", height:25, justifyContent:'center',alignItems:'center',marginLeft:10, borderRadius:9}} >
      <Ionicons 
              name="ios-wifi"
              color="white"
              size={20}
      />
    </View>
    <View style={{flex:6,marginLeft:20}}> 
       <Text style={{fontSize:15,fontWeight:'normal'}}>Wi-Fi</Text>
    </View>
    <View style={{flex:6,alignItems:'flex-end',marginRight:10}}>
        <Text style={{color:'#aaa',fontSize:20,fontWeight:'normal'}}>STUDENT</Text>
    </View>
     <View style={{flex:1}}>
     <Ionicons 
              name="ios-arrow-forward"
              size={20}
              style={ {color:'#aaaaaa'}}
            />
     </View>
  </View> 
  {/* Blutooth */}
  <View style={{flexDirection:'row', backgroundColor:'#ffffff', justifyContent:'space-between',borderTopWidth:0.3,borderColor:'#dedede',height:50,alignItems:'center'}}>
    <View style={{flex:1.5,backgroundColor:"blue", height:25, justifyContent:'center',alignItems:'center',marginLeft:10, borderRadius:9}} >
      <Ionicons 
              name="ios-bluetooth"
              color="white"
              size={20}
      />
    </View>
    <View style={{flex:12,marginLeft:20}}> 
       <Text style={{fontSize:15,fontWeight:'normal'}}>Bluetooth</Text>
    </View>
    <View style={{flex:4,alignItems:'flex-end',marginRight:10}}>
        <Text style={{color:'#aaa',fontSize:20,fontWeight:'normal'}}>Off</Text>
    </View>
     <View style={{flex:1}}>
     <Ionicons 
              name="ios-arrow-forward"
              size={20}
              style={ {color:'#aaaaaa'}}
            />
     </View>
  </View> 
  {/* mobile data */}
  <View style={{flexDirection:'row', backgroundColor:'#ffffff', justifyContent:'space-between',borderTopWidth:0.3,borderColor:'#dedede',height:50,alignItems:'center'}}>
    <View style={{flex:1.2,backgroundColor:"#03fc6f", height:25, justifyContent:'center',alignItems:'center',marginLeft:10, borderRadius:9}} >
      <Ionicons 
              name="ios-cellular"
              color="white"
              size={20}
      />
    </View>
    <View style={{flex:12,marginLeft:20}}> 
       <Text style={{fontSize:15,fontWeight:'normal'}}>Mobile Data</Text>
    </View>
    <View style={{flex:1}}>
     <Ionicons 
              name="ios-arrow-forward"
              size={20}
              style={ {color:'#aaaaaa'}}
            />
     </View>
  </View> 
  {/* personal hotspot */}
  <View style={{flexDirection:'row', backgroundColor:'#ffffff', justifyContent:'space-between',borderTopWidth:0.3,borderColor:'#dedede',height:50,alignItems:'center'}}>
    <View style={{flex:1.2,backgroundColor:"#03fc6f", height:25, justifyContent:'center',alignItems:'center',marginLeft:10, borderRadius:9}} >
      <Octicons 
              name="link"
              color="white"
              size={20}
      />
    </View>
    <View style={{flex:12,marginLeft:20}}> 
       <Text style={{fontSize:15,fontWeight:'normal'}}>Personal Hotspot</Text>
    </View>
     <View style={{flex:2}}>
     <FontAwesome 
              name="toggle-off"
              size={30}
              style={ {color:'#aaaaaa'}}
            />
     </View>
  </View> 
  {/* vpn   */}
  <View style={{flexDirection:'row', backgroundColor:'#ffffff', justifyContent:'space-between',borderTopWidth:0.3,borderColor:'#dedede',height:40,alignItems:'center'}}>
    <View style={{flex:1.5,backgroundColor:"orange", height:25, justifyContent:'center',alignItems:'center',marginLeft:10, borderRadius:9}} >
      <Ionicons 
              name="ios-airplane"
              color="white"
              size={20}
      />
    </View>
    <View style={{flex:12,marginLeft:20}}> 
       <Text style={{fontSize:15,fontWeight:'normal'}}>Airplane Mode</Text>
    </View>
     <View style={{flex:2}}>
     <FontAwesome 
              name="toggle-off"
              size={30}
              style={ {color:'#aaaaaa'}}
            />
     </View>
  </View> 


</View>

</View>
  )

}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f3f3f3"
  },
  finishing:{
    backgroundColor:'#ffffff',
    height:40,
    marginTop:20,
    flexDirection:'row',
     borderWidth:0.4, 
     borderColor:'#dedede'
  }
})

export default HomeScreen;