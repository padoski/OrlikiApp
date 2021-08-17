import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Pressable, Text, View} from 'react-native';
import {Auth, DataStore, Storage} from 'aws-amplify';
import {Booking, User} from '../models';
import MyBookingsScreen from '../screens/MyBookingsScreen';
const Tab = createMaterialTopTabNavigator();

const MyBookingsTop = () => {
  const [bookings, setBookings] = useState([]);
  const [actualBookings, setActualBookings] = useState([]);
  const [endedBookings, setEndedBookings] = useState([]);
  useEffect(() => {
    const getUserAndBooking = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userSub = userInfo.attributes.sub;
      const user = (await DataStore.query(User)).find(u => u.sub === userSub);
      const books = await DataStore.query(Booking, c =>
        c.userID('eq', user.id),
      );
      setBookings(books);
    };
    getUserAndBooking();
  }, []);

  const check = () => {
    for (var i = 0; i < bookings.length; i++) {
      const fullDate = `${bookings[i].day} ${bookings[i].time}`;
      const data = new Date(fullDate);
      const today = new Date();
      if (data > today) {
        console.log('aktualne');
        console.log(bookings[i]);
        const obj = bookings[i];
        setActualBookings(actualBookings => [...actualBookings, obj]);
      } else {
        console.log('zakonczone');
        console.log(bookings[i]);
        const obj = bookings[i];
        setEndedBookings(actualBookings => [...actualBookings, obj]);
      }
    }
  };
  useEffect(() => {
    check();
    console.log(actualBookings);
    console.log(endedBookings);
  }, [bookings]);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#467337',
        indicatorStyle: {
          backgroundColor: '#467337',
        },
      }}>
      <Tab.Screen name={'progress'} options={{title: 'Aktualne'}}>
        {() => <MyBookingsScreen bookings={actualBookings} />}
        {/* {() => (
          <View>
            <Pressable
              onPress={() => {
                console.log(actualBookings);
              }}>
              <Text>Pokaz aktualne</Text>
            </Pressable>
          </View>
        )} */}
      </Tab.Screen>
      <Tab.Screen name={'ended'} options={{title: 'Zakończone'}}>
        {() => <MyBookingsScreen bookings={endedBookings} />}
        {/* {() => (
          <View>
            <Pressable
              onPress={() => {
                console.log(endedBookings);
              }}>
              <Text>Pokaz zakonczone</Text>
            </Pressable>
          </View>
        )} */}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MyBookingsTop;
