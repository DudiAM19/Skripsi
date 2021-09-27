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
  notifSection: {
    width: width * 0.8,
    height: width * 0.3,
    backgroundColor: '#DAF5D8',
    borderRadius: 25,
    justifyContent: 'center',
  },
  notifText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#575555',
  },
  humaditySection: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: '#FFE8CD',
    borderRadius: 40,
    margin: width * 0.1,
    alignItems: 'center',
  },
  textHumadity: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#727272',
    marginVertical: width * 0.03,
  },
  tempHumadity: {
    borderWidth: 2,
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: 50,
    borderColor: '#727272',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTempHumadity: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  temperatureSection: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: '#FCF9C0',
    borderRadius: 100,
    marginTop: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: '#FCF9C0',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    width: width * 0.2,
    height: width * 0.2,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: '#FFF500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTemp: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#575555',
  },
});

export default styles;
