import React, { useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'


export default function Home(){
    const navigation = useNavigation()

    const fade = useRef(new Animated.Value(0)).current

    const fadeInAnimation = () => {
        Animated.timing(
            fade,
            {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true   
            }
        ).start()
    }

    function openNewScreen(screen: string){
        navigation.navigate(screen)
    }

    return(
        <SafeAreaView style={style.container}>
            <Animated.View style={[ style.fadeInStyle ,{ opacity: fade }]}>
                <Text style={style.textContent}> Home </Text>
                <Image
                    source={ require('../img/logoGama.png')}
                />
            </Animated.View>
            <View>
                <RectButton onPress={ () => openNewScreen('home') }>
                    <Text>Home</Text>
                </RectButton>
                
                <RectButton onPress={ () => openNewScreen('details') }>
                    <Text>Detalhes</Text>
                </RectButton>

                <RectButton onPress={ fadeInAnimation }>
                    <Text>Animation</Text>
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
        backgroundColor: '#808080'
    },
    textContent: {
        color: '#fff',
        fontSize: 22
    },
    fadeInStyle: {
        flex: 1
    }
})