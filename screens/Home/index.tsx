import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ashraful" type="large" />
      <Header title="Ashraful" type="medium" />
      <Header title="Ashraful" type="small" />
      <Button title="Save" disabled />
      <Button title="Save" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});

export default Home;
