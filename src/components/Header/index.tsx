import { scaleFontSize } from '@/styles/scaling';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  title: string;
  type: 'large' | 'medium' | 'small';
  color?: string;
  numberOfLines?: number;
}

const Header = ({ title, type, color, numberOfLines }: Props) => {
  const styleToApply = () => {
    switch (type) {
      case 'large':
        return styles.title1;
      case 'medium':
        return styles.title2;
      case 'small':
        return styles.title3;
      default:
        return styles.title1;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styleToApply(), { color }]} numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
    color: '#022150',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
    color: '#022150',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
    color: '#022150',
  },
});

export default Header;
