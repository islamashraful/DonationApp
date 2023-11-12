import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { horizontalScale, verticalScale } from '@/styles/scaling';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.spacing}>
          <Header title="Welcome back" type="large" />
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

        <Pressable style={styles.registrationBtn}>
          <Header title="Don't have an account?" type="small" color="#156cf7" />
        </Pressable>
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
  registrationBtn: {
    alignItems: 'center',
  },
});

export default Login;
