import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '@/styles/scaling';

interface Props {
  title: string;
  isInactive?: boolean;
  onPress?: () => void;
}

const Tab = ({ title, isInactive, onPress }: Props) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[
        styles.container,
        isInactive ? styles.inactiveTab : undefined,
        tabWidth,
      ]}
      disabled={isInactive}
      onPress={onPress}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[styles.title, isInactive ? styles.inActiveTitle : undefined]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    backgroundColor: '#2979f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    color: '#fff',
  },
  inactiveTab: {
    backgroundColor: '#f3f5f9',
  },
  inActiveTitle: {
    color: '#79869f',
  },
});

export default Tab;
