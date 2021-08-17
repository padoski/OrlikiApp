import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {Auth, DataStore} from 'aws-amplify';
import styles from './styles';
// import {useRecoilState} from 'recoil';
// import {darkModeState} from '../../assets/data/atoms';
// import ToggleSwitch from 'toggle-switch-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../models';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const onSignOut = () => {
    Auth.signOut();
  };

  return (
    <View
      style={{backgroundColor: '#cfdeca', flex: 1, justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            navigation.navigate('Settings');
          }}
          style={styles.profileButton}>
          <Fontisto
            name="player-settings"
            size={25}
            color="white"
            style={{marginRight: 70, marginLeft: 20}}
          />
          <Text style={styles.textButton}>Profil</Text>
        </Pressable>
        {/* My reservations */}
        <Pressable
          onPress={() => {
            navigation.navigate('MyBookings');
          }}
          style={styles.profileButton}>
          <FontAwesome
            name="history"
            size={25}
            color="white"
            style={{marginRight: 70, marginLeft: 20}}
          />
          <Text style={styles.textButton}>Moje rezerwacje</Text>
        </Pressable>
        {/* Favourites objects */}
        <View style={styles.profileButton}>
          <MaterialIcons
            name="favorite"
            size={25}
            color="white"
            style={{marginRight: 70, marginLeft: 20}}
          />
          <Text style={styles.textButton}>Ulubione boiska</Text>
        </View>
        {/* Settings */}

        {/* Friends */}
        <View style={styles.profileButton}>
          <FontAwesome5
            name="user-friends"
            size={25}
            color="white"
            style={{marginRight: 70, marginLeft: 20}}
          />
          <Text style={styles.textButton}>Znajomi</Text>
        </View>
        {/* Logout */}
        <Pressable onPress={onSignOut} style={styles.profileButton}>
          <Entypo
            name="log-out"
            size={25}
            color="white"
            style={{marginRight: 70, marginLeft: 20}}
          />
          <Text style={styles.textButton}>Wyloguj</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
