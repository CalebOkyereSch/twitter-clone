import React from 'react';
import { Text,View } from 'react-native';

export default function MessageScreen() {
 
  return (
    <View>
      <Text>
        Hello Messages
      </Text>
    </View>
  );
}

MessageScreen.navigationOptions = {
  title: 'Messages',
};