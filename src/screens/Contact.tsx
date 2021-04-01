import React, { useCallback, useState } from 'react';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Platform,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { sendContact } from '../service';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


interface IPostData{
    name?: string;
    email?: string;
    phone?: string;
}




export default function ContactScreen() {
    const [isSendMessage, setIsSendMessage] = useState(false)
    const [postData, setPostData] = useState<IPostData>({});

    const [ asyncStorageData, setAsyncStorageData ] = useState<IPostData>({})

    const navigation = useNavigation()

    const dataStorage = async ( data: IPostData ) => {
        const valueData = JSON.stringify(data)
        await AsyncStorage.setItem('@storageApp', valueData)
    }

    const handleSendInfo = useCallback(() => {

        sendContact.post('', postData).then(
            response => {
                setIsSendMessage(true)
                dataStorage(postData)
            }
        )
    }, [postData]
    )

    const getAllData = async () => {
        const returnData: string | any = await AsyncStorage.getItem('@storageApp')
        const jsonReturn: IPostData = JSON.parse(returnData)
        return jsonReturn
    } 

    useEffect(() => {
        getAllData().then(
            response => {
                setAsyncStorageData(response)
            }
        )
    }, [])

    return (
        <ScrollView style={style.scroolViewContainer}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={ 500 }
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={style.container}
            >
                { asyncStorageData ? ( <Text>{asyncStorageData.name}</Text>) : '' }
                {isSendMessage ? (
                    <View style={style.container}>
                        <LottieView
                            source={require('../animation/lf30_editor_ij5vetkw.json')}
                            style={style.animationContent}
                            autoPlay
                            loop
                        />
                        <RectButton style={style.sendButton} onPress={navigation.goBack}>
                            <Text style={style.textSendButton}>Voltar</Text>
                        </RectButton>
                    </View>

                ) : (

                    <View >
                        <View style={style.logoContainer}>
                            <Image
                                source={require('../img/logoGama.png')}
                            />
                        </View>
                        <Text>Name: </Text>
                        <TextInput
                            style={style.input}
                            value={postData?.name}
                            onChangeText={text => setPostData({ ...postData, name: text })}
                        />

                        <Text>Email: </Text>
                        <TextInput
                            style={style.input}
                            value={postData?.email}
                            onChangeText={text => setPostData({ ...postData, email: text })}
                        />

                        <Text>Telefone: </Text>
                        <TextInput
                            style={style.input}
                            value={postData?.phone}
                            onChangeText={text => setPostData({ ...postData, phone: text })}
                        />

                        <RectButton style={style.sendButton} onPress={handleSendInfo}>
                            <Text style={style.textSendButton}>Enviar email</Text>
                        </RectButton>

                    </View>
                )}
            </KeyboardAvoidingView>
        </ScrollView> 
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
    containerKeyBoard: {
        marginBottom: 40
    },
    scroolViewContainer: {
        flex: 1
    },
    animationContent: {
        width: 300,
        height: 300
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32
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
        width: Dimensions.get('window').width - 65,
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