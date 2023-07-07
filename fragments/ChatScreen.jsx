import React, {useState } from 'react';
import axios from 'axios';
import { View, TextInput,FlatList, Clipboard, Text, Alert, ToastAndroid } from 'react-native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';

export default ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const handleSend = async () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(),
        text: inputText
      };
      
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${newMessage.text}`).then(response => {
        newMessage.response = response.data[0].meanings[0].definitions[0].definition
      }).then(() => {
        setMessages([...messages, newMessage]);
      }).then(() => {
        AsyncStorage.setItem('history', JSON.stringify(messages));
      }).catch(error => {
        ToastAndroid.showWithGravity(
          error.toString(),
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      })
      setInputText('');
    }
  };
  
  const handlePress = (text) => {
    Clipboard.setString(text);
    ToastAndroid.showWithGravity(
      'text copied',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
  


  const renderMessage = ({ item }) => {
    return (
      <View style={{ marginVertical: 4, }}>
        <Text  style={styles.textRequest} onLongPress={() => handlePress(item.text)}>{item.text}</Text>
        <Text style={styles.textResponse} onLongPress={() => handlePress(item.response)}>{item.response}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textRequest: {
    alignSelf: 'flex-end',
    backgroundColor: '#99eeff',
    borderTopEndRadius: 0,
    borderRadius: 10,
    padding: 10,
    margin: 5
  },
  textResponse: {
    alignSelf: 'flex-start',
    backgroundColor: '#07c1dd',
    borderTopEndRadius: 0,
    borderRadius: 10,
    padding: 10,
    margin: 5
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 8 
  },
  input: {
    flex: 5, 
    marginRight: 8, 
    borderWidth: 1, 
    borderRadius: 4, 
    padding: 8, 
    backgroundColor: '#ebf4fc', 
    borderColor: '#2196f3'
  },
  button: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});