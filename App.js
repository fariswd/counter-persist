/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import storeConfig from './src/store/storeConfig'
import IndexScreen from './src/screen'

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <IndexScreen />
        </PersistGate>
      </Provider>
    );
  }
}
