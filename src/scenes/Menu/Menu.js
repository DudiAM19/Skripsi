import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './styles.js';
// import function useHome
import useHome from './useHome';

const Menu = () => {
  const {humadity, temperature, notification} = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.TextLeft}>
          <Text style={styles.Good}>Good</Text>
          <Text style={styles.Morning}>Morning</Text>
        </View>
        <View style={styles.TextRight}>
          <Text style={styles.Time}>10.05</Text>
          <Text style={styles.Time1}>a.m</Text>
        </View>
      </View>
      <View style={styles.Content}>
        <View style={styles.ImgSection}>
          <Image source={require('../../asset/tree.png')} style={styles.Img} />
        </View>
        <View style={styles.Info}>
          <View style={styles.HumadityCard}>
            <View style={styles.circle1}>
              <View style={styles.circle2}>
                <View style={styles.circle3}>
                  <Image
                    source={require('../../asset/water.png')}
                    style={styles.ImgWater}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.HumadityValue}>{humadity + '%'}</Text>
            <Text style={styles.HumadityText}>Humadity</Text>
          </View>
          <View style={styles.TempCard}>
            <View style={styles.circle1}>
              <View style={styles.circle2}>
                <View style={styles.circle3}>
                  <Image
                    source={require('../../asset/temp.png')}
                    style={styles.ImgWater}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.TempValue}>{temperature + '°'}</Text>
            <Text style={styles.TempText}>Temperature</Text>
          </View>
        </View>
      </View>
      <View style={styles.Footer}>
        <Text style={styles.Desc}>{notification}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
