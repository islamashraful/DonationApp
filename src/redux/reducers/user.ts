import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  profileImage: string;
  userData: FirebaseAuthTypes.UserCredential | null;
}

const initialState: UserState = {
  userData: null,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<FirebaseAuthTypes.UserCredential>) => {
      return { ...state, isLoggedIn: true, userData: action.payload };
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { resetToInitialState, logIn } = userSlice.actions;
export default userSlice.reducer;
