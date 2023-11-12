import { horizontalScale, scaleFontSize } from '@/styles/scaling';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, disabled, loading, onPress }: Props) => (
  <Pressable
    style={[
      styles.container,
      disabled || loading ? styles.disabled : undefined,
    ]}
    disabled={disabled || loading}
    onPress={onPress}>
    {loading && <ActivityIndicator color="#27313b" style={styles.activity} />}
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
    flexDirection: 'row',
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
  activity: {
    marginRight: horizontalScale(5),
  },
});

export default Button;
