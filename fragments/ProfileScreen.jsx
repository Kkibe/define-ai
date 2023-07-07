import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import CardSlider from '../components/CardSlider';

export default ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HISTORY</Text>
      <CardSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});