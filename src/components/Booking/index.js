import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {DataStore} from 'aws-amplify';
import {Orlik} from '../../models';

const Booking = props => {
  const {reservation} = props;
  const [address, setAddress] = useState();

  useEffect(() => {
    const fetchInfo = async () => {
      const orlik = await DataStore.query(Orlik, c =>
        c.id('eq', reservation.orlikID),
      );
      console.log(orlik);
      setAddress(orlik[0].address);
    };
    fetchInfo();
  }, []);

  console.log(reservation);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text>{reservation.day}</Text>
        <Text>{reservation.time}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.payStatus}>Opłacone</Text>
        <Text>{address}</Text>
      </View>
    </View>
  );
};

export default Booking;
