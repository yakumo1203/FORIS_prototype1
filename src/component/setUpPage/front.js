import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class frontPage extends Component {
  render() {
    return (
      <ImageBackground source={ImageForis1.jpg} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
    );
  }
}
