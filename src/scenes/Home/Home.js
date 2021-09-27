import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

// const width = Dimensions.get('window');

// const image = {uri: 'https://reactjs.org/logo-og.png'};

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../asset/Android.png')}
        resizeMode="contain"
        style={styles.image}>
        <Text style={styles.Text}>MyGarden</Text>
        <View style={{alignItems: 'center', marginBottom: 300}}>
          <View style={styles.backBtn}>
            <TouchableOpacity
              style={styles.Btn}
              onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.textBtn}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
