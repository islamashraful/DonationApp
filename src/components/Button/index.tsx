import { horizontalScale, scaleFontSize } from '@/styles/scaling';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
}

const Button = ({ title, disabled, onPress }: Props) => (
  <Pressable
    style={[styles.container, disabled ? styles.disabled : undefined]}
    disabled={disabled}
    onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#2979f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#fff',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
