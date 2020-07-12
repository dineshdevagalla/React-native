import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {View, TextInput, Text} from 'react-native';
import styled from 'styled-components/native';
interface TextInputProps {
  placeholder: string;
  keyboardType: any;
  onChangeText: any;
  width: any;
  secureType?: boolean;
}
const TextInputComponent = styled.TextInput`
  background-color: #f2f2f2;
  margin-top: 10px;
  margin-bottom: 10px;
  width: ${(props: {width: string}) => props.width};
`;
@observer
class TextInputWithErrorText extends React.Component<TextInputProps> {
  @observable showErrorMessageText = false;
  @observable showErrorMessage = '';

  render() {
    const {
      placeholder,
      keyboardType,
      secureType,
      onChangeText,
      width,
    } = this.props;
    console.log(secureType, 'hiii dinesh how r u');
    return (
      <TextInputComponent
        placeholder={placeholder}
        editable={true}
        keyboardType={keyboardType}
        multiline={true}
        onChangeText={onChangeText}
        width={width}
        secureTextEntry={secureType}
      />
    );
  }
}
export {TextInputWithErrorText};
