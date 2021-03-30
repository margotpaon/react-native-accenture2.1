import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler'




export default function Home(){

    const navigation = useNavigation()

    function openNewScreen(screen: string){
        navigation.navigate(screen)
    }

    return(
        <View style={style.Container}>
            <Text style={style.TextContent}> Home </Text>
            <View>
                <Text onPress={ () => openNewScreen('home')}> Home </Text>
                <Text onPress={ () => openNewScreen('details')}> Details </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#68de5a'
    },
    TextContent: {
        color: '#fff',
        fontSize: 22
    }
})