import React, {useEffect, useState} from 'react';
import 'react-native-get-random-values';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRecoilState} from 'recoil';
import {darkModeState} from '../../assets/data/atoms';
import ToggleSwitch from 'toggle-switch-react-native';
import {User} from '../../models';
import {Auth, DataStore, Storage} from 'aws-amplify';
import styles from './styles';
import SettingsRow from '../../components/SettingsRow';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import {v4 as uuidv4} from 'uuid';
import {S3Image} from 'aws-amplify-react-native';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useRecoilState(darkModeState);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [fieldPosition, setFieldPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [sex, setSex] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [team, setTeam] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    // console.log(isEnabled);
  };
  const storeTheme = async value => {
    try {
      await AsyncStorage.setItem('theme', value);
    } catch (e) {
      console.log('error', e);
    }
  };
  useEffect(() => {
    storeTheme(JSON.stringify(isEnabled));
  }, [isEnabled]);
  useEffect(() => {
    const fetchUserData = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      if (!userInfo) {
        return;
      }
      const userId = userInfo.attributes.sub;
      //check if user exist in DB
      const user = (await DataStore.query(User)).find(
        user => user.sub === userId,
      );
      setUser(user);
      console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUSER');
      console.log(user);
      // setUserName(user.name.split('@')[0]);
      setUserName(user.name);
      setFieldPosition(user.fieldPosition);
      setCity(user.city);
      setProvince(user.province);
      setTeam(user.team);
      setSex(user.sex);
      setPhone(user.phone);
      setBirthYear(user.birthYear);
      setImage(user.image);
    };
    fetchUserData();
  }, []);

  const updateProfile = async () => {
    console.log(fieldPosition);
    console.log(sex);
    console.log(birthYear);
    console.log(province);
    console.log(team);
    console.log(city);
    console.log(phone);
    console.log(userName);
    console.log(user);

    let imageRes;
    if (!!newImage) {
      console.log('wchodze tu');
      imageRes = await uploadImage();
    }
    console.log('image res');
    console.log(imageRes);

    await DataStore.save(
      User.copyOf(user, updated => {
        updated.fieldPosition = fieldPosition;
        updated.sex = sex;
        updated.birthYear = birthYear;
        updated.province = province;
        updated.team = team;
        updated.city = city;
        updated.phone = phone;
        updated.name = userName;
        updated.image = imageRes;
      }),
    );
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setNewImage(image.path);
      sheetRef.current.snapTo(1);
    });
  };
  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setNewImage(image.path);
      sheetRef.current.snapTo(1);
    });
  };
  const toggleEdit = () => {
    console.warn('toggle edit activated');
    setEditMode(previousState => !previousState);
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(newImage);
      const blob = await response.blob();
      const urlParts = newImage.split('.');
      const extension = urlParts[urlParts.length - 1];
      console.log(extension);
      const key = `${uuidv4()}.${extension}`;
      console.log(key);
      await Storage.put(key, blob);
      return key;
    } catch (e) {
      console.log(e);
    }
  };

  const renderContent = () => (
    <View style={styles.bottomSheetContainer}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.addPhoto}>Dodaj zdjęcie</Text>
        <Text style={styles.shortDesc}>Wybierz swoje zdjęcie profilowe</Text>
      </View>
      <Pressable style={styles.bottomSheetButton} onPress={takePhotoFromCamera}>
        <Text style={styles.bottomSheetButtonText}>Zrob zdjecie</Text>
      </Pressable>
      <Pressable
        style={styles.bottomSheetButton}
        onPress={choosePhotoFromGallery}>
        <Text style={styles.bottomSheetButtonText}>Wybierz z galerii</Text>
      </Pressable>
      <Pressable
        style={styles.bottomSheetButton}
        onPress={() => {
          sheetRef.current.snapTo(1);
        }}>
        <Text style={styles.bottomSheetButtonText}>Anuluj</Text>
      </Pressable>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );
  const displayProfileImage = (newImage, image) => {
    console.log(newImage, image);
    if (newImage) {
      return (
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          imageStyle={{borderRadius: 35}}
          source={{uri: newImage}}
        />
      );
    } else {
      return <S3Image imgKey={image} resizeMode="cover" style={styles.image} />;
    }
  };

  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);
  return (
    <SafeAreaView style={{backgroundColor: '#red', height: '100%'}}>
      <ScrollView>
        {/* Profile settings */}
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#467337',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {displayProfileImage(newImage, image)}

          {!editMode && (
            <Pressable style={styles.editProfile} onPress={toggleEdit}>
              <Text style={styles.editProfileText}>Edytuj profil</Text>
            </Pressable>
          )}
          {editMode && (
            <Pressable
              style={[styles.editProfile, {backgroundColor: '#6b282b'}]}
              onPress={() => sheetRef.current.snapTo(0)}>
              <Text style={styles.editProfileText}>Zmień zdjęcie</Text>
            </Pressable>
          )}
          {/* </Pressable> */}
        </View>
        <View style={styles.profileContainer}>
          <SettingsRow
            dane={userName}
            title={'Nazwa'}
            stateChanger={setUserName}
            keyType={'default'}
            editMode={editMode}
          />
          <SettingsRow
            dane={fieldPosition}
            title={'Pozycja'}
            stateChanger={setFieldPosition}
            keyType={'default'}
            editMode={editMode}
          />
          <SettingsRow
            dane={sex}
            title={'Płeć'}
            stateChanger={setSex}
            keyType={'default'}
            editMode={editMode}
          />
          <SettingsRow
            dane={birthYear}
            title={'Rok urodzenia'}
            stateChanger={setBirthYear}
            keyType={'number-pad'}
            editMode={editMode}
          />
          <SettingsRow
            dane={province}
            title={'Województwo'}
            stateChanger={setProvince}
            keyType={'default'}
            editMode={editMode}
          />
          <SettingsRow
            dane={team}
            title={'Drużyna'}
            stateChanger={setTeam}
            keyType={'default'}
            editMode={editMode}
          />
          <SettingsRow
            dane={city}
            title={'Miasto'}
            stateChanger={setCity}
            keyType={'default'}
            editMode={editMode}
          />
          <SettingsRow
            dane={phone}
            title={'Telefon'}
            stateChanger={setPhone}
            keyType={'number-pad'}
            editMode={editMode}
          />
        </View>
        {/* Dark mode */}
        <View style={{alignItems: 'center'}}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="green"
            offColor="grey"
            label="Tryb Ciemny"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="large"
            onToggle={toggleSwitch}
          />
        </View>
        {/* Update profile */}
        {editMode && (
          <View style={styles.buttonContainer}>
            <Pressable style={styles.updateButton} onPress={updateProfile}>
              <Text style={styles.updateText}>ZAKTUALIZUJ PROFIL</Text>
            </Pressable>
          </View>
        )}

        {/* Cancel  */}
        {editMode && (
          <View style={styles.buttonContainer}>
            <Pressable style={styles.cancelButton} onPress={toggleEdit}>
              <Text style={styles.cancelText}>ANULUJ</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, -300]}
        borderRadius={10}
        initialSnap={1}
        renderContent={renderContent}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </SafeAreaView>
  );
};

export default Settings;
