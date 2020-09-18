import React from 'react';



import styled from 'styled-components/native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

    return (
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    )
}

export default Button;




//Styles
const Container = styled(RectButton)`
    width:320px;
    height: 60px;
    background: #ff9000;
    border-radius: 10px;

    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-family: 'RobotoSlab-Medium';
    color: #312e38;
    font-size:20px;
`;

