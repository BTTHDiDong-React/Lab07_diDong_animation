import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../themes/styles';
const ComponentHead = (props) => {
//   console.log("🚀 ~ file: ComponentHead.js ~ line 6 ~ ComponentHead ~ props", props)

    let {funBack, funNext} = props;
  return (
    <View style={[{
        backgroundColor: '#0066FF',
        justifyContent: 'space-between'
    }, styles.row]} >

        <TouchableOpacity onPress={()=> funBack()}>
            <Icon name="arrow-left-bold" color="#eee" size={30} style={[{}, styles.iconHome]} />

        </TouchableOpacity>
        <TouchableOpacity
           onPress={()=> funNext()}
        >
            <Icon name="arrow-right-bold" color="#eee" size={30} style={[{}, styles.iconHome]} />
        </TouchableOpacity>
    </View>
  )
}

export default ComponentHead;