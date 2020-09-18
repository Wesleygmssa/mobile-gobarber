import React, { useCallback, useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useField } from '@unform/core';

//propiedades di input
import { TextInputProps } from 'react-native';




interface InputProps extends TextInputProps {
  name: string;
  icon: string;

}

interface InputValueReferece {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ name, icon, ...rest }, ref) => {
  const inputElementRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReferece>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputValueRef.current.value) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }
  }, [])


  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));


  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    })
  }, [fieldName, registerField])

  return (
    <Container isFocused={isFocused}>

      <FeatherIcon name={icon} size={20} color={isFocused || isFilled ? '#ff9000' : '#666360'} />

      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => { inputValueRef.current.value = value }}
        {...rest}
      />

    </Container>
  )
}


export default forwardRef(Input);

//Styles

import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean
}


const Container = styled.View<ContainerProps>`
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

  ${props => props.isFocused && css`
      border-color: #ff9000;
  `}

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