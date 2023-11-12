import { scaleFontSize, verticalScale } from '@/styles/scaling';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';

interface Props {
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText: (val: string) => void;
}

const Input = ({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
}: Props) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: scaleFontSize(15),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomColor: 'rgba(167,167,167,0.5)',
    borderBottomWidth: 1,
  },
});

export default Input;
