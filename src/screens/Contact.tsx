import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TextInput, TextInputChangeEventData } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

import { sendContact } from '../service';

export default function ContactScreen(){
    const [ isSendMessage, setIsSendMessage ] = useState(false)
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    function handleSendInfo() {
        const postData = {
            name,
            email,
            phone
        }
        sendContact.post('', postData).then(
            response => {
                setIsSendMessage(true)
            }
        )
    }
    return(
        <View style={style.container}>
            { isSendMessage ? (
                <LottieView
                    source={require('../animation/lf30_editor_ij5vetkw.json')}
                    style={ style.animationContent }
                    autoPlay
                    loop
                />

            ) : (
                <View>
                    <Text>Name: </Text>
                    <TextInput
                        style={style.input}
                        value={ name } 
                        onChangeText={ text => setName(text) }
                    />
                    <Text>Email: </Text>
                    <TextInput
                        style={style.input}
                        value={ email }
                        onChangeText={ text => setEmail(text) }
                    />
                    <Text>Telefone: </Text>
                    <TextInput
                        style={style.input}
                        value={ phone }
                        onChangeText={ text => setPhone(text) }
                    />
                    
                </View>
            )}
            

            <RectButton style={style.sendButton} onPress={ handleSendInfo }>
                <Text style={style.textSendButton}>Enviar email</Text>
            </RectButton>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'


    },
    animationContent: {
        width: 300,
        height: 300
    },
    input: {
        paddingHorizontal: 20,
        height: 50,
        width: Dimensions.get('window').width - 60,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 12,
        marginVertical: 10
    },
    sendButton: {
        marginTop: 40,
        backgroundColor: '#68de5a',
        width: Dimensions.get('window').width - 95,
        height: 40,
        borderRadius: 22,
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSendButton: {
        fontSize: 20,
        color: '#fff',
    }

})