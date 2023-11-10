import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Tab from '../../components/Tab';
import Badge from '../../components/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ashraful" type="large" />
      <Header title="Ashraful" type="medium" />
      <Header title="Ashraful" type="small" />
      <Button title="Save" disabled />
      <Button title="Save" />
      <Tab title="Highlight" />
      <Tab title="Save" isInactive />
      <Badge title="Environment" />
      <FontAwesomeIcon icon={faSearch} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});

export default Home;
