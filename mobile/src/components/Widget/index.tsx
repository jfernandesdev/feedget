import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Widget(){
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF'}}>I am a astronaut!</Text>
    </View>
  );
}
