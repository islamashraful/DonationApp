import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

interface Props {
  title: string;
}

const Badge = ({ title }: Props) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable style={[styles.container, tabWidth]}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={styles.title}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(27),
    backgroundColor: '#145855',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    color: '#fff',
  },
});

export default Badge;
