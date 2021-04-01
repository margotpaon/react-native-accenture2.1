import React from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Details() {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [videoPlay, setVideoPlay] = useState(false)

    const navigation = useNavigation()
    function handleNextScreen() {
        navigation.navigate('contact')
    }

    function handleModal() {
        setIsOpenModal(!isOpenModal)
    }

    function handlePlay() {
        setVideoPlay(!videoPlay)
    }
    return (
        <View style={style.container}>
            <Image source={require('../../assets/banner_img.png')} />
            <View style={style.contentInfo}>
                <Text style={style.title}> NOVO GAMA EXPERIENCE 2.0 </Text>
                <Text style={style.paragraph}>Nós somos uma empresa de educação que prepara talentos para o mercado digital. Nos nossos programas educacionais, as pessoas participantes enfrentam desafios reais, se conectam com empresas digitais, recebem mentorias de profissionais que estão mandando bem em suas áreas e, ainda têm a oportunidade de ensinar e aprender com a nossa comunidade visando o emprego, transição de carreira e o life long learning.</Text>
                <View style={style.buttonsContainer}>
                    <Button title={'Veja mais'} onPress={handleModal}/>
                    <Button title={'Entrar em contato'} onPress={handleNextScreen}/>
                </View>

                <View style={style.alignContent}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isOpenModal}
                        style={style.modal}
                        onRequestClose={handleModal}
                    >
                        <View style={style.modalView}>
                            <YoutubePlayer
                                height={200}
                                play={videoPlay}
                                videoId={"TcBYBukjkBY"}
                            />
                            <Button title={videoPlay ? "pause" : "play"} onPress={handlePlay} />
                            <Button title={"fechar modal"} onPress={handleModal} />
                        </View>
                    </Modal>
                </View>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },
    contentInfo: {
        padding: 40,
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    paragraph: {
        marginTop: 22,
        textAlign: 'center'
    },
    alignContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height
    },
    modal: {
        marginTop: 500
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        justifyContent: 'center',
        flexDirection: 'column',
        shadowOpacity: 0.3,
    },
    buttonsContainer: {
        margin: 22
    }
    // button: {
        
    // }
    
})