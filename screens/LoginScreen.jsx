import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.replace("Home");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.text}>Already have an account ? </Text>
        <TouchableOpacity 
            onPress={() => navigation.replace("Register")}>
            <Text style={styles.clickable}>Sign Up</Text>
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