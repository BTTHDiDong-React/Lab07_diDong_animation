import { View, Text, TouchableOpacity, Animated, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect, useRef, useState } from 'react'

import ComponentHead from './form/ComponentHead';
import styles from '../themes/styles';

const Screen2 = ({navigation}) => {
    const [x, setx] = useState(50);
    const [y, sety] = useState(20);

    const fadeX = useRef(new Animated.Value(x)).current; /// left
    const fadeY = useRef(new Animated.Value(y)).current;   /// bottom

    const setFadeXAdd = () => {
        if (x>300) {
            return;
        }
        let a = x + 20;
        setx(a);
       
    }
    const setFadeXminus = () => {
        if (x < 0) {
            return;
        }
        let a = x - 20;
        setx(a);
       
    }
    
    useEffect(() => {
        Animated.timing(fadeX, {toValue: x , duration: 500, useNativeDriver: false}).start();
    }, [x])
    //
    const setFadeYAdd = () => {
        if (y>=520) {
            return;
        }
        let a = y + 40;
        sety(a);
       
    }
    const setFadeYminus = () => {
        if (y <= 0) {
            return;
        }
        let a = y - 40;
        sety(a);
       
    }
    useEffect(() => {
        Animated.timing(fadeY, {toValue: y , duration: 500, useNativeDriver: false}).start();

        // console.log('fadeY',y);
    }, [y])


    function funBack() {
        navigation.navigate('Screen1')
    }
    function funNext() {
        navigation.navigate('Screen3')
    }

    return (
        <View style={[{

        }, styles.flex_1]} >
            <StatusBar />
            <ComponentHead funBack={() => funBack()} funNext={() => funNext()} />
            <View style={[{ borderBottomWidth: 1, }, styles.flex_3]}  >
                <Animated.Text style={[{
                    position: 'absolute',
                    left: fadeX,
                    bottom: fadeY,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#f00',
                }]} >Hello</Animated.Text>
            </View>
            <View   style={[{ } , styles.viewCenter ]}   >
                <Text  style={[{ fontWeight: 'bold', marginTop: 15, fontSize: 16, }  ]}   >Click để di chuyển.</Text>
            </View>
            <View style={[{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10
            }, styles.flex_1, styles.row,]}  >

                <TouchableOpacity onPress={() => setFadeXminus()}>
                    <Text style={[{}, styles.btn_screen2]} >left</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFadeXAdd()} >
                    <Text style={[{}, styles.btn_screen2]} >right</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFadeYAdd()} >
                    <Text style={[{}, styles.btn_screen2]} >Top</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFadeYminus() }>
                    <Text style={[{}, styles.btn_screen2]} >bottom</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Screen2;