import React from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Details(){

    const navigation = useNavigation()
    function handleNextScreen(){
        navigation.navigate('contact')
    }
    return(
        <View>
            <Text onPress={ handleNextScreen }> Acessar contato </Text>
        </View>
    )
}