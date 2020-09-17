import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

// import { Container, Title } from './styles';


const SignIn: React.FC = () => {

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


                        <Input name="email" icon="mail" placeholder="email" />
                        <Input name="password" icon="lock" placeholder="senha" />


                        <Button onPress={() => { }}>Entrar</Button>

                        <ForgotPassword onPress={() => { }} >
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>


                    </Container>
                </ScrollView>


            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => { }}>
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