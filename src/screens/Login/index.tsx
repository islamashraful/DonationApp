import { loginUser } from '@/api/user';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { AuthStackParamList } from '@/navigation/routes';
import { logIn } from '@/redux/reducers/user';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '@/styles/scaling';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';

type Props = StackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation: { navigate } }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

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

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={styles.spacing}>
          <Button
            title="Login"
            disabled={!email || !password}
            loading={loading}
            onPress={async () => {
              setLoading(true);
              const response = await loginUser(email, password);
              setLoading(false);
              if (!response.success || !response.data) {
                setError(response.error);
              } else {
                dispatch(logIn(response.data));
                setError('');
              }
            }}
          />
        </View>

        <Pressable
          style={styles.registrationBtn}
          onPress={() => navigate('Registration')}>
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
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#ff0000',
    marginBottom: verticalScale(7),
  },
});

export default Login;
