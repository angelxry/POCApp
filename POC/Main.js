import React from 'react';
import { View, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Routes } from './Routes';

const flags = {
  pageA : false,
  pageB : true,
}

// I have put the unauthorized message in console log. 
const Main = ({navigation}) => {
  
    return (
        <View>
            <Button title="Proceed to Page A" onPress={() => flags["pageA"] ? navigation.navigate(Routes.PageA) : Alert.alert('Error', 'Unauthorized.')}/>
            <Button title="Proceed to Page B" onPress={() => flags["pageB"] ? navigation.navigate(Routes.PageB) : Alert.alert('Error', 'Unauthorized.')}/>
        </View>
    );
}

// Getting some prop type errors, found this solution online, not sure what this is though. 
Main.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

export default Main;