import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const validateUsername = (username) => {
      // Username should contain only alphanumeric characters and underscore
      const usernameRegex = /^\w+$/;
      return usernameRegex.test(username);
    };

    const validateEmail = (email) => {
      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePassword = (password) => {
      // Password should contain at least 8 characters, including at least one uppercase, one lowercase, one digit, and one special character
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      return passwordRegex.test(password);
    };

    
    const handleRegister = () => {
      if (!validateUsername(username)) {
        Alert.alert('Invalid username');
        return;
      }
  
      if (!validateEmail(email)) {
        Alert.alert('Invalid email');
        return;
      }
  
      if (!validatePassword(password)) {
        Alert.alert('Invalid password');
        return;
      }
      // Validation passed, proceed with submitting the form
      navigation.navigate("Login");
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'#2196f3'}
          onChangeText={text => setUsername(text)}
          
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType={'email-address'}
          placeholderTextColor={'#2196f3'}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={'#2196f3'}
          onChangeText={text => setPassword(text)}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.text}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text style={styles.clickable}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      fontSize: 40,
      color: '#2196f3',
    },
    input: {
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 100,
      marginBottom: 16,
      paddingHorizontal: 10,
      marginVertical: 10,
      padding: 10, 
      backgroundColor: '#ebf4fc', 
    },
    button: {
      backgroundColor: '#2196f3',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 100,
      alignItems: 'center',
      width: '80%',
      marginVertical: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
    footer:{ 
        display: 'flex', 
        flexDirection :'row', 
        justifyContent: "center"
      },
      text:{
        fontSize: 16, 
        fontWeight:"bold" 
      },
      clickable: { 
        color: '#2196f3', 
        fontWeight: 'bold', 
        fontSize: 16 
      }
  });
  
