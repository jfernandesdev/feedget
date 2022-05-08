import React from 'react';
import { 
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';

import { FeedbackTypes } from '../Widget';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { theme } from '../../theme';
import { styles } from './styles';

import { feedbackTypes } from '../../utils/feedbackTypes';

interface FormProps {
  feedbackType: FeedbackTypes;
}

export function Form({ feedbackType } : FormProps ){
  
  const feedbackTypeInfo = feedbackTypes[feedbackType]; 

  function onTakeShot() {

  }

  function onRemoveShot() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft 
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
             {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton 
          screenshot='https://github.com/jfernandesdev.png'
          onTakeShot={onTakeShot}
          onRemoveShot={onRemoveShot}
        />

        <Button isLoading={false}/>
      </View>

    </View>
  );
}