import React, {useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeBottomTabNavigation from './WelcomeBottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import ReservationScreen from '../screens/ReservationScreen';
import OrlikPageScreen from '../screens/OrlikPageScreen';
import MyBookingsTop from './MyBookingsTopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRecoilState} from 'recoil';
import {darkModeState} from '../assets/data/atoms';
import ReservationSummary from '../screens/ReservationSummary';
import Settings from '../screens/Settings';
const Stack = createStackNavigator();
const Router = () => {
  const [isEnabled, setIsEnabled] = useRecoilState(darkModeState);
  const getTheme = async () => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      const temp = JSON.parse(theme);
      return temp;
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getTheme()
      .then(res => {
        setIsEnabled(res);
      })
      .catch(err => {
        console.log('error', err);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeBottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Orlik"
          component={OrlikPageScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReservationScreen"
          component={ReservationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyBookings"
          component={MyBookingsTop}
          options={{
            title: 'Rezerwacje',
          }}
        />
        <Stack.Screen
          name="ReservationSummary"
          component={ReservationSummary}
          options={{
            title: 'Podsumowanie rezerwacji',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Ustawienia',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
