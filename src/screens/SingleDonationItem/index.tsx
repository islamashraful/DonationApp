import { RootState } from '@/redux/store';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const SingleDonationItem = () => {
  const selectedDontationInformation = useSelector(
    (state: RootState) => state.donations.selectedDontationInformation,
  );

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(selectedDontationInformation, undefined, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SingleDonationItem;
