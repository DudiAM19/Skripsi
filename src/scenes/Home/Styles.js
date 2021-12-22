import {StyleSheet, Dimensions} from 'react-native';
// import { Fonts } from 'styles';
import {Colors, Fonts} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  Body: {
    alignItems: 'center',
  },
  FirstText: {
    fontSize: RFValue(34),
    textAlign: 'center',
    marginTop: width * 0.1,
    fontWeight: 'bold',
  },
  SecondText: {
    fontSize: RFValue(16),
    textAlign: 'center',
    marginVertical: width * 0.04,
  },
  ImgSection: {
    alignItems: 'center',
    marginVertical: width * 0.1,
  },
  Img: {
    width: width * 0.9,
    height: width * 0.9,
  },
  Btn: {
    width: width * 0.5,
    height: width * 0.12,
    backgroundColor: '#73A2C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    // marginVertical: width?
  },
  TextBtn: {
    fontSize: RFValue(22),
    color: Colors.WHITE,
  },
  TextSkripsi: {
    fontSize: RFValue(15),
    marginBottom: width * 0.1,
  },
});

export default styles;
