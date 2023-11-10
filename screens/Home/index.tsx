import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Search from '../../components/Search';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search onSearch={val => console.log(val)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});

export default Home;
