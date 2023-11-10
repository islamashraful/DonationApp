import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Search from '../../components/Search';
import SingleDonationItem from '../../components/SingleDonationItem';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search onSearch={val => console.log(val)} />
      <View
        style={{
          flexDirection: 'row',
        }}>
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
