import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

import ComponentHead from './form/ComponentHead';
import styles from '../themes/styles';

const Screen3 = () => {

    //
    function funBack() {
        navigation.navigate('Screen2')
    }
    function funNext() {
        navigation.navigate('Screen4')
    }


  return (
    <View style={[{
       
    }, styles.flex_1]} >
        <ComponentHead funBack={() => funBack()} funNext={() => funNext()} />
            
    </View>
  )
}

export default Screen3;