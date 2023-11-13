import { createUser } from '@/api/user';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { MainStackParamList } from '@/navigation/routes';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '@/styles/scaling';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';

type Props = StackScreenProps<MainStackParamList, 'Registration'>;

const Registration = ({ navigation }: Props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {success ? <Text style={styles.success}>{success}</Text> : null}

        <View style={styles.spacing}>
          <Button
            disabled={!fullName || !email || !password}
            loading={loading}
            title="Registration"
            onPress={async () => {
              setLoading(true);
              let user = await createUser(fullName, email, password);
              setLoading(false);
              if (user?.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered!');
                setTimeout(() => navigation.navigate('Login'), 2000);
              }
            }}
          />
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
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#ff0000',
    marginBottom: verticalScale(7),
  },
  success: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: verticalScale(7),
  },
});

export default Registration;
