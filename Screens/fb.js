import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Fbscreen extends React.Component {
    render() {
      return (
        <View>
        <View>  <AppHeader/> </View>

    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
        <Text style={{textAlign: 'center', fontSize: 40}}> THIS IS FACEBOOK 
        </Text>
      </View>
    </View>
      );
    }
  }