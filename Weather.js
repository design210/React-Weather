import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases ={
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "비",
        subtitle: "전국에 단비가 내리겠네요",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ['#EFF253', '#FF7300'],
        title: "맑음",
        subtitle: "강한 자외선 조심하세요",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "천둥번개",
        subtitle: "강한 폭우가 예상됩니다.",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "구름많음",
        subtitle: "날씨가 많이 흐립니다.",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "눈",
        subtitle: "함박눈이 예상됩니다.",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "이슬비",
        subtitle: "이슬비가 내립니다.",
        icon: "weather-hail"
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "이슬비",
        subtitle: "이슬비가 내립니다.",
        icon: "weather-hail"
    },
    Mist: {
        colors: ['#D7D2CC', '#304352'],
        title: "안개",
        subtitle: "운전 조심하세요",
        icon: "weather-fog"
    }
};
  function Weather({weatherName, temp}){
      return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
  }
  export default Weather;

  Weather.propTypes = {
      temp: PropTypes.number.isRequired,
      weatherName: PropTypes.string.isRequired
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      upper: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
      },
      temp: {
        fontSize: 50,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
      },
      lower: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
      },
      title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300',
      },
      subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 40
      }
  })