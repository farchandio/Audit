// NewPageScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NewPageScreen = ({ route, navigation }) => {
  const { inputText, onSubmitAnswer } = route.params;
  const [userAnswer, setUserAnswer] = useState('');

  const submitAnswer = () => {
    onSubmitAnswer(userAnswer);
    navigation.goBack(); // Kembali ke halaman sebelumnya setelah submit
  };

  return (
    <View>
      <Text>Input Text on New Page:</Text>
      <Text>{inputText}</Text>

      <TextInput
        placeholder="Your Answer"
        value={userAnswer}
        onChangeText={(text) => setUserAnswer(text)}
      />
      <TextInput
        placeholder="Your Answer"
        value={userAnswer}
        onChangeText={(text) => setUserAnswer(text)}
      />

      <Button title="Submit Answer" onPress={submitAnswer} 
      />
    </View>
  );
};

export default NewPageScreen;
