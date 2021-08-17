import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import {Auth, DataStore, Storage, API, graphqlOperation} from 'aws-amplify';
import {createPaymentIntent} from '../../graphql/mutations';
import {Booking, User} from '../../models';
import {useStripe} from '@stripe/stripe-react-native';
import {useNavigation} from '@react-navigation/native';
const ReservationSummary = () => {
  const route = useRoute();
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const amount = route.params.amount * 100;
  const [clientSecret, setClientSecret] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const {error} = await presentPaymentSheet({clientSecret});

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
      reserve();
    }
  };

  const reserve = async () => {
    console.log(route.params.hourPicked[0]);
    for (var i = 0; i < route.params.hourPicked.length; i++) {
      uploadBooking(route.params.hourPicked[i]);
    }
    // navigation.navigate('MyBookings');
    navigation.reset({
      index: 1,
      routes: [{name: 'Home'}, {name: 'MyBookings'}],
    });
  };
  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const fetchPaymentIntent = async () => {
    const response = await API.graphql(
      graphqlOperation(createPaymentIntent, {amount}),
    );
    console.log(response);
    setClientSecret(response.data.createPaymentIntent.clientSecret);
  };
  const initializePaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const {error} = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });
    console.log('succes');

    if (error) {
      Alert.alert(error);
    }
  };

  const uploadBooking = async hourPicked => {
    const userInfo = await Auth.currentAuthenticatedUser();
    const userSub = userInfo.attributes.sub;

    const user = (await DataStore.query(User)).find(u => u.sub === userSub);

    let item = {
      day: route.params.day,
      time: hourPicked,
      orlikID: route.params.orlikID,
      userID: user.id,
    };
    await DataStore.save(new Booking(item));
    // navigation.navigate('ReservationSummary');
    console.log(item);
  };

  const showHoursBooked = hourPicked => {
    var myloop = [];
    console.log('godziny tutaj');
    for (var i = 0; i < hourPicked.length; i++) {
      console.log(hourPicked[i]);
      myloop.push(
        <View key={i} style={styles.centerThem}>
          <Text>{hourPicked[i].slice(0, 8)}</Text>
        </View>,
      );
    }
    return <View>{myloop}</View>;
  };

  return (
    <View>
      <View style={styles.barTitle}>
        <Text>Dzień</Text>
      </View>
      <View style={styles.centerThem}>
        <Text>{route.params.day}</Text>
      </View>
      <View style={styles.barTitle}>
        <Text>Adres</Text>
      </View>
      <View style={styles.centerThem}>
        <Text>{route.params.orlikAdress}</Text>
      </View>
      <View style={styles.barTitle}>
        <Text>Godziny</Text>
      </View>
      {showHoursBooked(route.params.hourPicked)}
      <View style={styles.barTitle}>
        <Text>Do zapłaty</Text>
      </View>
      <View style={styles.centerThem}>
        <Text>{`${route.params.amount} zł`}</Text>
      </View>

      <View style={styles.centerThem}>
        <Pressable style={styles.pay} onPress={openPaymentSheet}>
          <Text>Zapłać i Zarezerwuj</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReservationSummary;
