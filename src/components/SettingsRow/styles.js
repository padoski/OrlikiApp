import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  innerContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#b8b4b4',
    alignItems: 'center',
    height: 40,
  },
  titleContainer: {
    width: 140,
  },
  title: {
    fontSize: 13,
    color: '#413b3b',
    fontWeight: 'bold',
  },
  normalMode: {
    color: 'black',
  },
  editMode: {
    maxWidth: 170,
    color: 'grey',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
});
export default styles;
