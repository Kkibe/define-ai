import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppBar from '../components/AppBar';
import ChatScreen from '../fragments/ChatScreen';
import SettingsScreen from '../fragments/SettingsScreen';
import ProfileScreen from '../fragments/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Chat') {
        iconName = 'chatbubbles';
      } else if (route.name === 'Profile') {
        iconName = 'person';
      }else {
        iconName = 'settings'
      }

      // Return the appropriate icon component
      return <Icon name={iconName} size={size} color={color} />;
    },
  })}>
    <Tab.Screen name="Chat" options={{ header: () => <AppBar title='Chat'/> }}  component={ChatScreen} />
    <Tab.Screen name="Profile" options={{ header: () => <AppBar title='Profile'/> }} component={ProfileScreen} />
    <Tab.Screen name="Settings" options={{ header: () => <AppBar title='Settings'/> }} component={SettingsScreen} />
  </Tab.Navigator>
  )
}
