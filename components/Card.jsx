import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default Card = ({ title, button1, button2,button3, icon1, icon2,icon3, onPressButton1, onPressButton2, onPressButton3 }) => {
  return (
    <View style={styles.cardContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressButton1}>
          <Text style={styles.buttonText}>{button1}</Text>
          {icon1 && <Icon name={icon1} size={24} style={styles.icon} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressButton2}>
          <Text style={styles.buttonText}>{button2}</Text>
          {icon2 && <Icon name={icon2} size={24} style={styles.icon} />}
        </TouchableOpacity>
        {button3 && <TouchableOpacity style={styles.button} onPress={onPressButton3}>
          <Text style={styles.buttonText}>{button3}</Text>
          {icon3 && <Icon name={icon3} size={24} style={styles.icon} />}
        </TouchableOpacity>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    flex: 4,
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    alignSelf: 'flex-end',
    flex: 1
  }
});