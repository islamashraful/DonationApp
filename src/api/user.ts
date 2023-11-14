import { updateToken } from '@/redux/reducers/user';
import store from '@/redux/store';
import auth from '@react-native-firebase/auth';

export const createUser = async (
  fullname: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({ displayName: fullname });
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return {
        error: 'That email address is already in use!',
      };
    }

    if (error.code === 'auth/invalid-email') {
      return {
        error: 'That email address is invalid!',
      };
    }

    return {
      error: 'Something went wrong with your request!',
    };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      success: true,
      data: response,
      token,
    };
  } catch (error: any) {
    return {
      success: false,
      error: 'Something went wrong with your request!',
    };
  }
};

export const logout = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    const token = await auth().currentUser?.getIdToken(true);
    if (token) {
      store.dispatch(updateToken({ token }));
    }
    return token;
  } catch (error) {
    console.log(error);
  }
};
