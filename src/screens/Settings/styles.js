import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  updateButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  updateText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  cancelButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  cancelText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  addPhoto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottomSheetContainer: {
    alignItems: 'center',
    height: 300,
    backgroundColor: 'white',
  },
  shortDesc: {
    color: 'grey',
  },
  bottomSheetButton: {
    width: 200,
    height: 40,
    backgroundColor: '#467337',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 10,
  },
  bottomSheetButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: '#467337',
    padding: 10,
  },
  editProfile: {
    padding: 10,
    width: 120,
    backgroundColor: '#2d4fbd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    alignItems: 'center',
  },
  editProfileText: {
    fontWeight: 'bold',
    color: '#d4d4d4',
  },
});
export default styles;
