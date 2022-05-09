import React from 'react';
import { 
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { Copyright } from '../Copyright';

import successImage from '../../assets/success.png';

import { styles } from './styles';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps ){
  return (
    <View style={styles.container}>
      <Image 
        source={successImage} 
        style={styles.image}
      />
      <Text style={styles.title}>
        Agradecemos o feedback!
      </Text>

      <TouchableOpacity 
        onPress={onSendAnotherFeedback}
        style={styles.button}
      >
        <Text style={styles.textButton}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
      
    </View>
  );
}