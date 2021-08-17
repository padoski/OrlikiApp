import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomMarker = props => {
  const {coordinate, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={{backgroundColor: 'white', borderRadius: 20}}>
        <FontAwesome
          name="soccer-ball-o"
          size={25}
          color={isSelected ? '#135c0b' : 'black'}
        />
      </View>
    </Marker>
  );
};
export default CustomMarker;
