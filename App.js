import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import Navi from './POC/Navi';

const App = () => {
  return (
    <NavigationContainer>
      <Navi/>
    </NavigationContainer>
  )
}

export default App;