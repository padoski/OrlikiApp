import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  Image,
  Linking,
} from 'react-native';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import orliks from '../../assets/data/orliks';
import OrlikImageInDetailScreen from '../OrlikImageInDetailScreen';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState} from 'recoil';
import {darkModeState} from '../../assets/data/atoms';
import stylesdark from '../../assets/darkmodestyles/styles';
import styleslight from '../../assets/lightmodestyles/styles';

const DetailedOrlik = props => {
  const navigation = useNavigation();
  const orlik = props.orlik;
  // console.log('OOOOOOOOOOOOOOOOOOOOOOOOORLIK');
  // console.log(orlik.latitude);
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const viewConfig = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 400,
  });
  const [isEnabled, setIsEnabled] = useRecoilState(darkModeState);
  const [modeBackground, setmodeBackground] = useState(
    isEnabled ? stylesdark.darkModeBackground : styleslight.lightModeBackground,
  );
  const [modeText, setmodeText] = useState(
    isEnabled ? stylesdark.darkModeTextColor : styleslight.lightModeTextColor,
  );
  // const latitude = '28.4815637';
  // const longitude = '-16.2291304';
  // const label = 'New York, NY, USA';
  // const url = Platform.select({
  //   ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
  //   android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
  // });
  const navigateToThePlace = () => {
    const url = Platform.select({
      ios:
        'maps:' +
        orlik.latitude +
        ',' +
        orlik.longitude +
        '?q=' +
        orlik.address,
      android:
        'geo:' + orlik.latitude + ',' + orlik.longitude + '?q=' + orlik.address,
    });
    console.warn('Nawiguje do orlika');
    Linking.openURL(url);
  };
  const reserve = () => {
    console.warn('Rezerwuje');
    navigation.navigate('ReservationScreen', {
      address: orlik.address,
      timeStart: orlik.timeStart,
      timeEnd: orlik.timeEnd,
      id: orlik.id,
    });
  };

  useEffect(() => {
    setmodeBackground(
      isEnabled
        ? stylesdark.darkModeBackground
        : styleslight.lightModeBackground,
    );
    setmodeText(
      isEnabled ? stylesdark.darkModeTextColor : styleslight.lightModeTextColor,
    );
  }, []);

  const renderPitchImage = () => {
    if (orlik.type === 'Sztuczna nawierzchnia') {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/sztuczna.png')}></Image>
      );
    } else if (orlik.type === 'Naturalna nawierzchnia') {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/natural.png')}></Image>
      );
    } else {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/images/hybrid.png')}></Image>
      );
    }
  };
  return (
    <View style={[styles.flexuj, modeBackground]}>
      <View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{orlik.address}</Text>
        </View>
        <FlatList
          data={orlik.images}
          renderItem={({item}) => <OrlikImageInDetailScreen orlik={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          pagingEnabled
          viewabilityConfig={viewConfig.current}
        />
      </View>
      <View>
        <View style={styles.dimensionTypeContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.type, modeText]}>Wymiary</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={modeText}>{orlik.width} m</Text>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={[styles.image, {marginLeft: 10}]}
                  source={require('../../assets/images/pitchDimension.png')}></Image>
                <Text style={modeText}>{orlik.length} m</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.type, modeText]}>{orlik.type}</Text>
            {renderPitchImage()}
          </View>
        </View>
        <View style={{padding: 20, alignItems: 'center'}}>
          <Text style={[styles.desc, modeText]}>{orlik.desc}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          position: 'absolute',
          width: '100%',
          top: height - 100,
        }}>
        <Pressable
          onPress={navigateToThePlace}
          style={[styles.button, {backgroundColor: '#2f87ba'}]}>
          <Text style={{fontSize: 20}}>Nawiguj</Text>
          <MaterialCommunityIcons name="google-maps" size={30} />
        </Pressable>
        <Pressable onPress={reserve} style={[styles.button]}>
          <Text style={{fontSize: 20}}>Zarezerwuj</Text>
          <MaterialIcons name="book-online" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default DetailedOrlik;
