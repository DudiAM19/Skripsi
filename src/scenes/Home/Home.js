import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Container} from 'components';

// const width = Dimensions.get('window');

// const image = {uri: 'https://reactjs.org/logo-og.png'};

import Styles from './Styles';

const Home = ({navigation}) => {
  return (
    <Container backgroundColor="white">
      <View style={Styles.Body}>
        <Text style={Styles.FirstText}>Lets plant with us</Text>
        <Text style={Styles.SecondText}>Make it easy with this app</Text>
        <View style={Styles.ImgSection}>
          <Image
            source={require('../../asset/Garden.png')}
            style={Styles.Img}
          />
        </View>
        <Text style={Styles.TextSkripsi}>Skripsi Dudi Ali Murtado</Text>
        <TouchableOpacity
          style={Styles.Btn}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={Styles.TextBtn}>Start</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Home;
