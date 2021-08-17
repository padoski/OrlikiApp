import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const SettingsRow = props => {
  const {dane, title, stateChanger, keyType, editMode} = props;
  return (
    <View>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
        </View>
        <View>
          <TextInput
            style={!editMode ? styles.normalMode : styles.editMode}
            value={dane.toString()}
            keyboardType={keyType}
            onChangeText={stateChanger}
            editable={editMode}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default SettingsRow;
