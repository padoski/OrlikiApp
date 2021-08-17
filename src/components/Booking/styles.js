import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginVertical: 5,
    borderColor: '#8aad89',
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    marginRight: 50,
    height: 70,
    justifyContent: 'space-around',
  },
  rightContainer: {
    height: 70,
    justifyContent: 'space-around',
  },
  payStatus: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
});
export default styles;
