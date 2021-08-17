import React from 'react';
import {Image, Text} from 'react-native';
import {ScrollView} from 'react-native';
import Lightbox from 'react-native-lightbox';
import styles from './styles';

const OrlikImageInDetailScreen = props => {
  const orlikImage = props.orlik;
  return (
    <Lightbox
      useNativeDriver={false}
      underlayColor={'white'}
      swipeToDismiss={false}
      springConfig={{tension: 30, friction: 7}}
      activeProps={{width: '100%', height: '70%', borderRadius: 0}}>
      <Image
        style={{
          height: 200,
          width: 200,
          borderRadius: 50,
          marginHorizontal: 5,
        }}
        resizeMode="contain"
        source={{
          uri: orlikImage,
        }}
      />
    </Lightbox>
  );
};

export default OrlikImageInDetailScreen;
