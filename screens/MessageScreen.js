// import React from 'react';
// import { Text,View } from 'react-native';

// export default function MessageScreen() {
 
//   return (
//     <View>
//       <Text style={{flex:1,justifyContent:'center', alignContent:'center'}}>
//         Hello Messages
//       </Text>
//     </View>
//   );
// }

// MessageScreen.navigationOptions = {
//   title: 'Messages',
// };


import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function MessageScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

MessageScreen.navigationOptions = {
  title: 'app.json',
};
