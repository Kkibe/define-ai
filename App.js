import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import StartScreen from './screens/StartScreen';
import Onboarding from './screens/Onboarding';
import AboutUsScreen from './screens/AboutUsScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen name='Onboarding' options={{headerShown: false}} component={Onboarding} />
      <Stack.Screen name='Start' options={{headerShown: false}} component={StartScreen} />
      <Stack.Screen name="Register" options={{ headerShown: false  }} component={RegisterScreen} />
      <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="Home" options={{ headerShown: false  }}  component={HomeScreen} />
      <Stack.Screen name="About Us" options={{ headerShown: false  }} component={AboutUsScreen} />
      <Stack.Screen name='Terms Of Service' options={{ headerShown: false  }} component={TermsOfServiceScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}