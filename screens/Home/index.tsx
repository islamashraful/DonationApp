import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});

export default Home;
