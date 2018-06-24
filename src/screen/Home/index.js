/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Linking,
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

import Dashboard from './component/dashboard'

export default class HomeScreen extends Component {
  componentDidMount() { // B
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
        Linking.addEventListener('url', this.handleOpenURL);
    }
  }
  
  componentWillUnmount() { // C
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => { // D
    this.navigate(event.url);
  }

  navigate = (url) => { // E
    const { navigate } = this.props.navigation;
    if(url) {
      const route = url.replace(/.*?:\/\//g, '');
      const routeName = route.split('/')[0];
      
      if (routeName === 'count') {
        navigate('CounterScreen')
      };
    }
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home Menu</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Dashboard navigation={this.props.navigation}/>
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});