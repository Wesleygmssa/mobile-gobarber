import React, { useCallback, useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';




const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleSignIn = useCallback((data: object) => {
        console.log(data)
    }, [])

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
                            <Title >Faça seu logon</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignIn}>

                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                                returnKeyType="next"
                                onSubmitEditing={() => {

                                }}
                            />

                            <Input
                                ref={passwordInputRef}
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm()
                                }}
                            />


                            <Button onPress={() => {
                                formRef.current?.submitForm();
                            }}>Entrar</Button>
                        </Form>

                        <ForgotPassword onPress={() => { }} >
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>


                    </Container>
                </ScrollView>


            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => { navigation.navigate('SignUp') }}>
                <Icon name="log-in" size={20} color="#ff9000" />
                <CreateAccountButtonText>
                    Criar uma conta
                </CreateAccountButtonText>
            </CreateAccountButton>

        </>
    );

}

export default SignIn;


/* Styles */

export const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
padding: 0 20px;

`;

export const Title = styled.Text`
font-size: 24px;
color: #f4ede8;
font-family: 'RobotoSlab-Medium';
margin: 30px 0 24px;
`

const ForgotPassword = styled.TouchableOpacity`
    margin-top: 20px;
`;

const ForgotPasswordText = styled.Text`
color: #f4ede8;
font-size: 16px;
font-family: 'RobotoSlab-Regular';

`;

const CreateAccountButton = styled.TouchableOpacity`
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

const CreateAccountButtonText = styled.Text`
    color: #ff9000;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`