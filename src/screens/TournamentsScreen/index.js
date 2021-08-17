import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {useRecoilState} from 'recoil';
import {darkModeState} from '../../assets/data/atoms';

const TournamentsScreen = () => {
  const [isEnabled, setIsEnabled] = useRecoilState(darkModeState);
  return (
    <View style={isEnabled ? styles.red : styles.green}>
      <Text>Turnieje</Text>
    </View>
  );
};

export default TournamentsScreen;
