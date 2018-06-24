/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Text, Thumbnail } from 'native-base'

import logoList from '../../../constant/logoList'

export default class Dashboard extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate('CounterScreen')}
          style={styles.touchMenu}
          >
          <Thumbnail square large size={80} source={logoList.counter} />
          <Text style={styles.textMenu}>Counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  touchMenu: {
    width: 80,
    height: 85,
    alignContent: 'center',
    alignItems: 'center',
  },
  textMenu: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 2
  }
});