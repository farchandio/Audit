// HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const navigateToNewPage = () => {
    navigation.navigate('NewPage', { inputText });
  };

  return (
    <View>
      <TextInput
        placeholder="Input Text"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Go to New Page" onPress={navigateToNewPage} />
    </View>
  );
};

export default HomeScreen;
