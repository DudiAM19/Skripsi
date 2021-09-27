import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: width * 0.1,
  },
  backBtn: {
    backgroundColor: '#CCFEAE',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 150,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    height: width * 0.5,
    width: width * 0.5,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 38,
    color: 'white',
  },
});

export default styles;
