
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons';

interface HeaderProps{
    title: string;
    showCancel?: boolean;
}

export default function HeaderComponent({ title, showCancel = true }: HeaderProps){

    const navigation = useNavigation();

    function handleReturnToHome(){
        navigation.navigate('home')
    }

    return(
        <View style={style.container}>
            <BorderlessButton
                onPress={ navigation.goBack }
            >
                <Feather name="arrow-left" size={22} color="#fff" />
            </BorderlessButton>
            <Text style={ style.title }> {title} </Text>
            { showCancel ? (
                <BorderlessButton
                    onPress={ handleReturnToHome }
                >
                    <Feather name="x" size={22} color="#fff" />
                </BorderlessButton>
            )  : (<View></View>) }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
       padding: 24,
       paddingTop: 44,
       backgroundColor: '#68de5a',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    title: {
        color: '#fff'
    }
})