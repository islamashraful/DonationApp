import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  firstName: 'Ashraful',
  lastName: 'Islam',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { updateFirstName } = userSlice.actions;
export default userSlice.reducer;
