import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { horizontalScale, verticalScale } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.backBtn}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.spacing}>
          <Header title="Hello, and Welcome!" type="large" />
        </View>
        <View style={styles.spacing}>
          <Input
            label="First & Last Name"
            placeholder="Enter your full name"
            onChangeText={val => setFullName(val)}
          />
        </View>
        <View style={styles.spacing}>
          <Input
            keyboardType="email-address"
            label="Email"
            placeholder="Enter your email..."
            onChangeText={val => setEmail(val)}
          />
        </View>
        <View style={styles.spacing}>
          <Input
            secureTextEntry
            label="Password"
            placeholder="******"
            onChangeText={val => setPassword(val)}
          />
        </View>

        <View style={styles.spacing}>
          <Button title="Login" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  spacing: {
    marginBottom: verticalScale(24),
  },
  backBtn: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
});

export default Registration;
