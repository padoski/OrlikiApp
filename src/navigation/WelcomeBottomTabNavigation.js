import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrlikiMapScreen from '../screens/OrlikiMapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TournamentsScreen from '../screens/TournamentsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const WelcomeBottomTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#467337',
      }}>
      <Tab.Screen
        name="Orliki"
        component={OrlikiMapScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Turnieje"
        component={TournamentsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="football" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Konto"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default WelcomeBottomTabNavigation;
