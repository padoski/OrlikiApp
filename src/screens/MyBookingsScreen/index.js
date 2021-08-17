import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Booking from '../../components/Booking';

const MyBookingsScreen = props => {
  const {bookings} = props;
  console.log('booookingi');
  console.log(bookings);

  return (
    <View>
      <FlatList
        data={bookings}
        renderItem={({item}) => <Booking reservation={item} />}
      />
    </View>
  );
};

export default MyBookingsScreen;
