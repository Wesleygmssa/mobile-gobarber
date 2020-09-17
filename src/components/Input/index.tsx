import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

//propiedades di input
import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;

}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {

    return (
        <Container>
            <FeatherIcon name={icon} size={20} color="#666360" />
            <TextInput
                placeholderTextColor="#666360"
                {...rest}
            />
        </Container>
    )
}


export default Input;

//Styles
const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: "RobotoSlab-Regular";
`;

const FeatherIcon = styled(Icon)`
  margin-right: 16px;
`;