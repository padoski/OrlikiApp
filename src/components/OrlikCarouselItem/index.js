import React from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState} from 'recoil';
import {darkModeState} from '../../assets/data/atoms';
import stylesdark from '../../assets/darkmodestyles/styles';
import styleslight from '../../assets/lightmodestyles/styles';

const OrlikCarouselItem = props => {
  const [isEnabled, setIsEnabled] = useRecoilState(darkModeState);
  const orlik = props.orlik;
  const navigation = useNavigation();
  const goToOrlikPage = () => {
    navigation.navigate('Orlik', {orlik: orlik});
  };
  console.log('tak wyglada orlik');
  console.log(orlik);
  const width = useWindowDimensions().width;
  return (
    <Pressable
      onPress={goToOrlikPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={[styles.innerContainer, isEnabled ? styles.dark : 'white']}>
        <Image
          style={styles.image}
          source={{
            uri: orlik.images[0],
          }}
        />
        <View style={styles.info}>
          <Text
            style={[
              styles.type,
              isEnabled
                ? stylesdark.darkModeTextColor
                : styleslight.lightModeTextColor,
              {marginBottom: 20},
            ]}>
            {orlik.address}
          </Text>
          <Text
            style={[
              styles.type,
              isEnabled
                ? stylesdark.darkModeTextColor
                : styleslight.lightModeTextColor,
            ]}>
            {orlik.type}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
export default OrlikCarouselItem;
