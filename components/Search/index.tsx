import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

interface Props {
  onSearch?: (val: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    onSearch?.(val);
  };

  return (
    <Pressable style={styles.container} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25c0ff"
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        value={search}
        onChangeText={handleSearch}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#f3f5f9',
    height: verticalScale(50),
    alignItems: 'center',
    borderRadius: horizontalScale(15),
  },
  textInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#686c7a',
  },
});

export default Search;
