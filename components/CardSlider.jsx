import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Text } from 'react-native';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';

export default CardSlider = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('history')
    .then((dataString) => {
      if (dataString) {
        setMessages(JSON.parse(dataString))
      } else {
        ToastAndroid.showWithGravity(
          'No data found in local storage.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    })
    .catch((error) => {
      console.log('Error retrieving data:', error);
    });
  }, [])
  
  const renderItem = ({ item }) => (
    <View style={styles.card} >
      <Text>{item.text}</Text>
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        style={styles.text}
      >
        {item.response}
      </Text>
    </View>
  );

  return (
    <FlatList
        data={messages && messages}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width-20,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10
  },
});