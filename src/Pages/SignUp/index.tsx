import React, { useCallback, useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

// import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'


const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled >

                <ScrollView keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>

                        <Image source={logoImg} />

                        <View>
                            <Title >Crie sua conta</Title>
                        </View>

                        <Form ref={formRef} onSubmit={() => { }}>

                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="Nome"
                            />

                            <Input
                                keyboardType="email-address"
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                            />

                            <Input
                                secureTextEntry
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                textContentType="newPassword"
                            />


                            <Button onPress={() => {
                                formRef.current?.submitForm();
                            }}>Cadastrar</Button>
                        </Form>




                    </Container>
                </ScrollView>


            </KeyboardAvoidingView>

            <BackToSignIn onPress={() => { navigation.navigate('SignIn') }}>
                <Icon name="arrow-left" size={20} color="#fff" />
                <BackToSignInText>
                    Voltar para logon
                </BackToSignInText>
            </BackToSignIn>

        </>
    );

}

export default SignUp;


/* Styles */

export const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
padding: 0 20px ${Platform.OS === 'android' ? 130 : 40}px; 

`;

export const Title = styled.Text`
font-size: 24px;
color: #f4ede8;
font-family: 'RobotoSlab-Medium';
margin: 20px 0 24px;
`

const ForgotPassword = styled.TouchableOpacity`
    margin-top: 20px;
`;

const ForgotPasswordText = styled.Text`
color: #f4ede8;
font-size: 16px;
font-family: 'RobotoSlab-Regular';

`;

const BackToSignIn = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    border-color:#232129;
    padding: 16px 0;
    
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const BackToSignInText = styled.Text`
    color: #fff;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`