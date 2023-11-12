import { horizontalScale } from '@/styles/scaling';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackButton;
