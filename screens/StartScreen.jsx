import React from 'react'
import {View, ImageBackground, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function StartScreen({navigation}) {
  return (
    <View>
      <ImageBackground source={require("../assets/ai_splash.png")} style={styles.image} />
      <View style={styles.container}>
      <Text style={styles.title}>Let's Get Started</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.button}>
                  <Text style={styles.buttonText}>
                    LOGIN
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={styles.button}>
                  <Text style={styles.buttonText}>
                    SIGN UP
                  </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{...styles.button,  backgroundColor: '#07c1dd'}}>
                  <Text style={styles.buttonText}>
                    SKIP
                  </Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    position: "absolute", 
    marginHorizontal: 40,  
    marginTop: 300
  },
  image: {
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 60,
    color: '#2196f3',
  },
  button: {
    backgroundColor: '#1253a0',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
