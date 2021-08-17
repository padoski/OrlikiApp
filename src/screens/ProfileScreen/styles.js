import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  profileButton: {
    alignItems: 'center',
    backgroundColor: '#467337',
    marginVertical: 10,
    width: 300,
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default styles;
