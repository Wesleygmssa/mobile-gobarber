import React, {
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    useState,
    useCallback
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';//monitoramento do input
import { Container, TextInput, Icon } from './styles';
//todas propriedades do input
interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputValueReference {
    value: string;
}
interface InputRef {
    focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, icon, ...rest }, ref) => {

    const inputElementRef = useRef<any>(null);

    //DADOS QUE SÃO MONITORADOS PELO FORM SIGNUP / SIGNIN
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    //CONTROLANDO TEXTO DIGITADO
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

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

        //setIsFilled(!!inputValueRef.current.value)
    }, [])

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        }
    }));

    //QUANDO FOR EXIBIDO EM TELA REGISTRE ELE DENTRO DO UNFORM
    useEffect(() => {
        //monitorar um campo pelo name
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
    }, [registerField, fieldName])

    return (
        <Container isFocused={isFocused} isErrored={!!error}>
            {/* componente de todos icones */}
            <Icon
                name={icon}
                size={20}
                // color="#666360"
                color={isFocused || isFilled ? '#ff9000' : '#666360'}
            />

            {/* input */}
            <TextInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputElementRef}
                defaultValue={defaultValue}

                //pegando texto digitado pelo usuário e atribuindo a value
                onChangeText={(value) => {
                    inputValueRef.current.value = value;
                }}
                placeholderTextColor="#666360" {...rest} />
        </Container>
    )
}

export default forwardRef(Input);