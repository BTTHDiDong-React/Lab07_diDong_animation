import { View, Text, StatusBar, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from '../themes/styles';
// -- <Icon name="arrow-right-bold" color="#eee" size={30} />

const Screen1 = ({ navigation }) => {

    let a = 1;
    const fadeAnim = useRef(new Animated.Value(0)).current;  // text opacity

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [])

    const setFakeAnim = () => {
        if (a === 1) {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ).start();
            a = 0;
        }
        else{
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ).start();
            a = 1;
        }

    }
    return (
        <View style={[{}, styles.flex_1]}>
            <StatusBar />
            <View style={[{
                backgroundColor: '#0066FF',
                justifyContent: 'space-between'
            }, styles.row]} >

                <TouchableOpacity onPress={() => setFakeAnim()} >
                    <Icon name="arrow-left-bold" color="#eee" size={30} style={[{}, styles.iconHome]} />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen2')}
                >
                    <Icon name="arrow-right-bold" color="#eee" size={30} style={[{}, styles.iconHome]} />
                </TouchableOpacity>
            </View>
            <Animated.View style={[{
                opacity: fadeAnim,

            }, styles.flex_1, styles.viewCenter]}>
                <Text style={[{ fontSize: 20, fontWeight: 'bold', color: 'red' }]} >Wellcome to my project</Text>
                <Text style={[{ fontSize: 16, fontWeight: 'bold', color: 'red' }]} >Authur: AVan</Text>
            </Animated.View>
            <Text>Screen1</Text>
        </View>
    )
}

export default Screen1;