import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import styles from './styles.js';

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../asset/Android.png')}
        style={styles.image}
        resizeMode="contain">
        <Text style={styles.Text}>MyGarden</Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.notifSection}>
            <Text style={styles.notifText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 200}}>
          <View style={styles.humaditySection}>
            <Text style={styles.textHumadity}>Humadity</Text>
            <View style={styles.tempHumadity}>
              <Text style={styles.textTempHumadity}>75°</Text>
            </View>
          </View>
          <View style={styles.temperatureSection}>
            <View style={styles.border}>
              <View style={styles.temp}>
                <Text style={styles.textTemp}>28°</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Menu;
