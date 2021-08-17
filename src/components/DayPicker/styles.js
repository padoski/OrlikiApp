import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c6d496',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    margin: 5,
  },
  dayName: {
    fontSize: 13,
    textTransform: 'uppercase',
    color: '#464743',
  },
  dayNumber: {fontSize: 30, fontWeight: 'bold'},
  month: {textTransform: 'uppercase'},
});
export default styles;
