import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const HourPicker = props => {
  const {hourItem, bookings, onPress, isSelected, dayPicked} = props;
  // const [value, setValue] = useState(false);
  // const [value2, setValue2] = useState(false);

  const check = () => {
    // console.log('wchodze tu');
    for (var i = 0; i < bookings.length; i++) {
      // console.log(`POZ 1 ${bookings[i].time}`);
      // console.log(`POZ 2 ${hourItem.hour}`);
      if (bookings[i].time === hourItem.hour) return true;
    }
    return false;
  };

  const check2 = () => {
    const fullDate = `${dayPicked} ${hourItem.hour}`;
    const data = new Date(fullDate);
    const today = new Date();
    if (data < today) {
      return true;
    } else {
      return false;
    }
  };

  var value = check();
  // setValue2(check2());
  var value2 = check2();

  const determineBackgroundColor = () => {
    if (value === true || value2 === true) {
      var color = 'grey';
      return color;
    }
    if (value === false && isSelected === true) {
      var color = 'green';
      return color;
    } else {
      var color = 'white';
      return color;
    }
  };
  // const what = check();
  // console.log(what);
  const determineText = () => {
    if (value === true || value2 === true) {
      var text = 'Zajete';
      return text;
    } else {
      var text = 'Wolne';
      return text;
    }
  };
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      disabled={value || value2 ? true : false}>
      {/* hour detail-value */}
      <View style={styles.hourValueContainer}>
        <Text style={styles.hourValue}>{hourItem.hour}</Text>
      </View>
      {/* pick this hour */}
      <View
        style={[
          styles.pickContainer,
          {backgroundColor: determineBackgroundColor()},
        ]}>
        <Text>{determineText()}</Text>
      </View>
    </Pressable>
  );
};

export default HourPicker;
