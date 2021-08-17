import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addressContainer: {
    alignItems: 'center',
    backgroundColor: '#13541c',
  },
  address: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  pricePerHour: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dimensionTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  desc: {
    fontSize: 15,
  },
  flexuj: {
    height: '100%',
  },
});
export default styles;
