import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  profileImage: string;
  userData: FirebaseAuthTypes.UserCredential | null;
  token: string | null;
}

const initialState: UserState = {
  userData: null,
  token: null,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{
        userData: FirebaseAuthTypes.UserCredential;
        token: string;
      }>,
    ) => {
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
      };
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
  },
});

export const { resetToInitialState, logIn, updateToken } = userSlice.actions;
export default userSlice.reducer;
