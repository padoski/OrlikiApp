import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const DayPicker = props => {
  const {dayItem, onPress, isSelected} = props;

  console.log(dayItem);
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isSelected ? 'green' : '#c6d496'},
      ]}>
      <Text style={styles.dayName}>{dayItem}</Text>
    </Pressable>
  );
};

export default DayPicker;
