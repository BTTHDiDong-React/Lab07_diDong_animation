import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

import ComponentHead from './form/ComponentHead';
import styles from '../themes/styles';

const Screen3 = () => {
  return (
    <View style={[{
       
    }, styles.flex_1]} >
        <ComponentHead />
       
    </View>
  )
}

export default Screen3;