import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  firstName: string;
  lastName: string;
  userId: number;
  profileImage: string;
}

const initialState: UserState = {
  firstName: 'Ashraful',
  lastName: 'Islam',
  userId: 1,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { updateFirstName, resetToInitialState } = userSlice.actions;
export default userSlice.reducer;
