import React from 'react';
import {View, Text} from 'react-native';
import DetailedOrlik from '../../components/DetailedOrlik';
import {useRoute} from '@react-navigation/native';

const OrlikPageScreen = props => {
  const route = useRoute();
  const {orlik} = route.params;

  return (
    <View>
      <DetailedOrlik orlik={orlik} />
    </View>
  );
};
export default OrlikPageScreen;
