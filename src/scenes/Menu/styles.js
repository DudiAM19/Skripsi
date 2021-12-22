import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from 'styles';
import {Fonts} from 'styles';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
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
  Header: {
    margin: width * 0.09,
    flexDirection: 'row',
  },
  TextLeft: {
    flex: 1,
  },
  Good: {
    fontSize: RFValue(32),
  },
  Morning: {
    fontSize: RFValue(32),
    fontWeight: 'bold',
  },
  TextRight: {
    flexDirection: 'row',
    marginTop: width * 0.13,
  },
  Time: {
    marginHorizontal: width * 0.02,
    fontSize: RFValue(32),
    fontWeight: 'bold',
  },
  Time1: {
    marginVertical: width * 0.03,
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  Content: {
    flexDirection: 'row',
    margin: width * 0.05,
  },
  ImgSection: {
    // marginVertical: width * 0.1,
  },
  Img: {
    height: width * 0.9,
    width: width * 0.5,
  },
  Info: {
    backgroundColor: '#F3F3F3',
    height: width * 0.9,
    width: width * 0.4,
    // marginVertical: width * 0.1,
    marginHorizontal: width * 0.02,
    alignItems: 'center',
  },
  HumadityCard: {
    marginVertical: width * 0.05,
    alignItems: 'center',
  },
  circle1: {
    backgroundColor: 'white',
    width: width * 0.21,
    height: width * 0.21,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle2: {
    backgroundColor: '#90CAF9',
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle3: {
    backgroundColor: 'white',
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgWater: {
    width: width * 0.09,
    height: width * 0.12,
  },
  HumadityValue: {
    fontWeight: 'bold',
    fontSize: RFValue(22),
    color: '#90CAF9',
  },
  HumadityText: {
    fontSize: RFValue(21),
  },
  TempCard: {
    alignItems: 'center',
  },
  TempValue: {
    fontWeight: 'bold',
    fontSize: RFValue(22),
    color: '#90CAF9',
  },
  TempText: {
    fontSize: RFValue(21),
  },
  Footer: {
    width: width * 0.8,
    height: width * 0.23,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.2,
    elevation: 2,
    marginVertical: width * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Desc: {
    width: width * 0.6,
    fontSize: RFValue(13),
    color: Colors.BLACK_TEXT,
  },
});

export default styles;
