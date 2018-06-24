/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base'

import * as CounterAction from '../../action/CounterAction'

class CounterScreen extends Component {
  handleCounterUp() {
    this.props.dispatch(CounterAction.increment())
  }
  handleCounterDown() {
    this.props.dispatch(CounterAction.decrement())
  }
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={() => navigation.goBack()}
              >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Counter</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Text style={styles.counterFont}>
            {this.props.count}
          </Text>
        </View>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.handleCounterDown()}>
              <Text>Counter Down</Text>
            </Button>
            <Button onPress={() => this.handleCounterUp()}>
              <Text>Counter Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

export default connect(mapStateToProps)(CounterScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterFont: {
    fontSize: 200,
  }
});