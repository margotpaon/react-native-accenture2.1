import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


export default function Home(){
    const navigation = useNavigation()

    const fade = useRef(new Animated.Value(0)).current

    useEffect( () => {
        Animated.timing(
            fade,
            {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true   
            }
        ).start()
    }, [fade])

    function openNewScreen(screen: string){
        navigation.navigate(screen)
    }

    return(
        <SafeAreaView style={style.container}>
            <Animated.View style={[ style.fadeInStyle ,{ opacity: fade }]}>
                <Image
                    source={ require('../img/logoGama.png') }
                />
            </Animated.View>
            <View>
                <RectButton onPress={ () => openNewScreen('home') }>
                    <Text style={style.textContent}>Home</Text>
                </RectButton>

                <RectButton onPress={ () => openNewScreen('details') }>
                    <Text style={style.textContent}>Detalhes</Text>
                </RectButton>

            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#68de5a',
        height: Dimensions.get('window').height
        
    },
    navigationContent: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    textContent: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    },
    fadeInStyle: {
        flex: 1,
        marginTop: Dimensions.get('window').height / 4
    }
})