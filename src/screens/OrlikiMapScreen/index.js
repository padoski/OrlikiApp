import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useState, useRef, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import CustomMarker from '../../components/CustomMarker';
import OrlikCarouselItem from '../../components/OrlikCarouselItem';
import orliks from '../../assets/data/orliks';
import {DataStore} from 'aws-amplify';
import {Orlik} from '../../models';
import mapstyles from '../../assets/data/mapstyles';
import {useRecoilState} from 'recoil';
import {darkModeState} from '../../assets/data/atoms';

const OrlikiMapScreen = () => {
  const [orliki, setOrliki] = useState([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  // console.log(orliks);
  const flatlist = useRef();
  const map = useRef();
  const [isEnabled, setIsEnabled] = useRecoilState(darkModeState);

  useEffect(() => {
    const fetchOrliks = async () => {
      const response = await DataStore.query(Orlik);
      setOrliki(response);
    };
    fetchOrliks();
  }, []);

  const viewConfig = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 400,
  });
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = orliki.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});
    const selectedPlace = orliki[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        customMapStyle={isEnabled ? mapstyles : []}
        initialRegion={{
          latitude: 50.48831,
          longitude: 19.33903,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {orliki.map(place => (
          <CustomMarker
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.pricePerHour}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={orliki}
          renderItem={({item}) => <OrlikCarouselItem orlik={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          pagingEnabled
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default OrlikiMapScreen;
