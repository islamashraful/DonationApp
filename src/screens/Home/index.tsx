import Header from '@/components/Header';
import Search from '@/components/Search';
import SingleDonationItem from '@/components/SingleDonationItem';
import React from 'react';
import { StyleSheet, SafeAreaView, View, Pressable, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName } from '../../../redux/reducers/user';
import { RootState } from 'redux/store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={user.firstName + ' ' + user.lastName} type="large" />
      <Pressable
        onPress={() => {
          dispatch(updateFirstName({ firstName: 'Changed!' }));
        }}>
        <Text>Change Name</Text>
      </Pressable>
      <Search onSearch={val => console.log(val)} />
      <View>
        <SingleDonationItem
          uri="https://picsum.photos/200/300"
          donationTitle="Title"
          badgeTitle="Environment"
          price={100}
        />
        <SingleDonationItem
          uri="https://picsum.photos/200/300"
          donationTitle="Title"
          badgeTitle="Environment"
          price={100}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Home;
