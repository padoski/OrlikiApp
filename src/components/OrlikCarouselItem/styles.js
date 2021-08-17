import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 120,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  image: {
    marginLeft: 20,
    width: '30%',
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  price: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: 3,
  },
  info: {
    flex: 1,
    marginTop: 15,
    marginLeft: 40,
  },
  type: {
    marginTop: 3,
  },
  dark: {
    backgroundColor: '#171614',
  },
});
export default styles;
