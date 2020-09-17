import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

//propriedades do RectButton
interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

    return (
        //Container =>RectButton
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}

export default Button;