import { View, Text, TouchableOpacity, StatusBar, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect, useRef, useState } from 'react'

import ComponentHead from './form/ComponentHead';
import styles from '../themes/styles';

const Screen3 = ({ navigation }) => {

    //
    function funBack() {
        navigation.navigate('Screen2')
    }
    function funNext() {
        navigation.navigate('Screen4')
    }
    ///
    let fadeY = useRef(new Animated.Value(0)).current;  // left

    const setRun_y = (val) => {
        let ani_1 = Animated.timing(fadeY, { toValue: 300, duration: 2000, useNativeDriver: false });
        let ani_2 = Animated.timing(fadeY, { toValue: 0, duration: 0, useNativeDriver: false });

        // ani_1.start();
        // ani_2.start();

        // Animated.sequence([ani_1, ani_2]).start()
        let finalAnim = Animated.sequence([ani_1, ani_2]);

        if (val) {

            Animated.loop(finalAnim).start();
        }
        else {
            Animated.loop(finalAnim).stop();
        }
    }

    const setReset = () => {
        let ani_2 = Animated.timing(fadeY, { toValue: 0, duration: 0, useNativeDriver: false });

        ani_2.start();
    }


    return (
        <View style={[{

        }, styles.flex_1]} >
            <StatusBar />
            <ComponentHead funBack={() => funBack()} funNext={() => funNext()} />
            <View style={[{ borderBottomWidth: 1, }, styles.flex_3]}  >
                <Animated.Text style={[{
                    position: 'absolute',
                    left: fadeY,
                    bottom: 250,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#f00',
                }]} >Hello</Animated.Text>
            </View>
            <View style={[{}, styles.viewCenter]}   >
                <Text style={[{ fontWeight: 'bold', marginTop: 15, fontSize: 16, }]}   >Click để di chuyển.</Text>
            </View>
            <View style={[{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10
            }, styles.flex_1, styles.row,]}  >

                <TouchableOpacity onPress={() => setRun_y(true)}>
                    <Text style={[{}, styles.btn_screen2]} >Start</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setReset()} >
                    <Text style={[{}, styles.btn_screen2]} >Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setRun_y(false)}>
                    <Text style={[{}, styles.btn_screen2]} >Stop</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Screen3;